import React from 'react';
import { Box } from '@chakra-ui/core';
import { useAuth } from '../contexts/auth';
import Calendar from '../components/Calendar';

const Dashboard = () => {
  const { googleApi, api } = useAuth();
  const { currentUser, handleSignOut } = googleApi;
  return (
    <Box
      pos="relative"
      backgroundColor="brand.lightgray"
      p={[4, 16]}
      minHeight="100vh"
    >
      <h1>Dashboard</h1>
      <h2>Email: {currentUser.email}</h2>
      <h2>Google ID: {currentUser.googleId}</h2>
      <button onClick={handleSignOut}>Sign out</button>
      <Calendar api={api} />
    </Box>
  );
};

export default Dashboard;
