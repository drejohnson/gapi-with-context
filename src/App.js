import React from 'react';
import { Route } from 'react-router-dom';
import { Stack } from '@chakra-ui/core';
import Authenticate from './routes/Authenticate';
import { useAuth } from './contexts/auth';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Welcome from './routes/Welcome';
import Dashboard from './routes/Dashboard';

function App() {
  const { googleApi } = useAuth();

  if (googleApi.isLoading) {
    return <div>Initializing...</div>;
  }

  return (
    <Stack pos="relative" w="100%" minHeight="100vh">
      <Header />

      <Route path="/authenticate/google">
        <Authenticate />
      </Route>
      <Route exact path="/">
        <Welcome />
      </Route>
      <PrivateRoute path="/:id/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Stack>
  );
}

export default App;
