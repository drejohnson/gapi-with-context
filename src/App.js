import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Stack, Flex, Box, Grid } from '@chakra-ui/core';
import Authenticate from './routes/Authenticate';
import Events from './routes/Events';
import useGapi from './hooks/useGapi';
import { useAuth } from './contexts/auth'
import EventService from './lib/calendarService';
import Header from './components/Header';

function App() {
  const [eventService, setEventService] = useState();

  const {googleApi, api} = useAuth()

  const {
    isLoading,
    isAuthenticated,
    currentUser,
    onSignIn,
    onSignOut
  } = googleApi;

  if (isLoading) {
    return <div>Initializing...</div>;
  }

  if (!isAuthenticated) {
    return <button onClick={onSignIn}>Signin with Google</button>;
  }

  return (
    <Stack pos="relative" w="100%" minHeight="100vh">
      <h2>Email: {currentUser && currentUser.email}</h2>
      <h2>Google ID: {currentUser && currentUser.googleId}</h2>
      <button onClick={onSignOut}>Sign out</button>

      <Route path="/authenticate/google">
        <Authenticate />
      </Route>
      <Route path="/events">
        <Events api={api} />
      </Route>
    </Stack>
  );
}

export default App;
