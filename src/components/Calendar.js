import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import {
  Heading,
  Flex,
  Grid,
  Text,
  Box,
  Icon,
  IconButton
} from '@chakra-ui/core';
import Days from './Days';
import Cell from './Cell';

const Calendar = ({ api }) => {
  const currentDay = dayjs();
  const [date, setDate] = useState(dayjs());

  const [events, setEvents] = useState(null);

  const currentYear = date.year();
  const currentMonth = date.month(); // January = 0
  const daysInMonth = date.daysInMonth();

  const firstDayOfMonth = dayjs(`${currentYear}-${currentMonth + 1}-1`);
  const weekDayOfFirstDay = firstDayOfMonth.day(); // Sunday = 0

  const lastDayOfMonth = dayjs(
    `${currentYear}-${currentMonth + 1}-${daysInMonth}`
  );
  const weekDayOfLastDay = lastDayOfMonth.day();

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrev = () => {
    setDate(date.subtract(1, 'month'));
  };

  const handleNext = () => {
    setDate(date.add(1, 'month'));
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await api.listEvents();
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [api]);

  return (
    <Box className="calendar" backgroundColor="white" borderRadius="10px">
      <Flex className="header" align="center" justify="center" py={4}>
        <IconButton
          w="2em"
          aria-label="Previous Month"
          icon="prev"
          backgroundColor="transparent"
          size="lg"
          onClick={handlePrev}
        />
        <Heading className="heading">{date.format('MMMM')}</Heading>
        <IconButton
          aria-label="Next Month"
          icon="next"
          backgroundColor="transparent"
          size="lg"
          onClick={handleNext}
        />
      </Flex>
      <Grid
        className="weekdays-grid"
        templateColumns="repeat(7, 1fr)"
        textAlign="right"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        {weekDays.map(d => (
          <Cell
            className="weekdays-item"
            fontSize={['lg', '4xl']}
            height="auto"
            key={d}
          >
            {d}
          </Cell>
        ))}
      </Grid>
      <Grid
        className="calendar-days-grid"
        templateColumns="repeat(7, 1fr)"
        textAlign="right"
      >
        <Days
          events={events}
          weekDayOfFirstDay={weekDayOfFirstDay}
          weekDayOfLastDay={weekDayOfLastDay}
          daysInMonth={daysInMonth}
          currentDay={currentDay}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
      </Grid>
    </Box>
  );
};

export default Calendar;
