const EventService = gapiClient => {
  return {
    listEvents: async () => {
      const data = await gapiClient.calendar.events.list({
        calendarId: 'primary'
      });
      return data.result.items;
    }
  };
};

export default EventService;
