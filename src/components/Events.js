import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth';

const Events = ({ api }) => {
  const [events, setEvents] = useState(null);

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
    <div>
      <h1>Events</h1>
      {events &&
        events.map(event => (
          <div key={event.id}>
            <h1>{event.summary}</h1>
          </div>
        ))}
    </div>
  );
};

export default Events;
