import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import Cell from './Cell';
import EventsIndicator from './EventsIndicator';

export const DisabledDays = ({ days }) => {
  return (
    <>
      {[...Array(days).keys()].map(i => (
        <Cell
          className="calendar-days-item faded"
          borderBottomWidth="1px"
          borderBottomColor="gray.200"
          key={i}
        >
          <Box backgroundColor="gray.100" h="100%" />
        </Cell>
      ))}
    </>
  );
};

const Days = ({
  events,
  weekDayOfFirstDay,
  weekDayOfLastDay,
  daysInMonth,
  currentDay,
  currentMonth,
  currentYear
}) => {
  return (
    <>
      <DisabledDays days={weekDayOfFirstDay} />
      {[...Array(daysInMonth).keys()].map(i => {
        // day is determined by items index + 1
        const day = i + 1;

        // used highlight current day
        const isToday =
          day === currentDay.date() &&
          currentMonth === currentDay.month() &&
          currentYear === currentDay.year();

        return (
          <Cell
            className="calendar-days-item"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            key={i}
          >
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              h="100%"
              py={[1, 8]}
            >
              <Box
                as="span"
                fontSize={['xl', '2xl']}
                fontWeight={700}
                color={isToday ? 'brand.blue_primary' : 'inherit'}
              >
                {day}
              </Box>
              {events &&
                events.map(event => (
                  <div key={event.id}>
                    <EventsIndicator
                      event={event}
                      day={day}
                      currentMonth={currentMonth}
                      currentYear={currentYear}
                    />
                  </div>
                ))}
            </Flex>
          </Cell>
        );
      })}
      <DisabledDays days={6 - weekDayOfLastDay} />
    </>
  );
};

export default Days;
