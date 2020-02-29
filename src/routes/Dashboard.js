import React from 'react';
import { useAuth } from '../contexts/auth';
import Events from '../components/Events';

const Dashboard = () => {
  const { googleApi, api } = useAuth();
  const { currentUser, handleSignOut } = googleApi;
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Email: {currentUser.email}</h2>
      <h2>Google ID: {currentUser.googleId}</h2>
      <button onClick={handleSignOut}>Sign out</button>
      <Events api={api} />
    </div>
  );
};

export default Dashboard;
