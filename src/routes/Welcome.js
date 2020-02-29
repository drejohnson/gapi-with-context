import React from 'react';
import { useAuth } from '../contexts/auth';

const Welcome = () => {
  const { googleApi } = useAuth();
  const { isAuthenticated, handleSignIn, currentUser } = googleApi;
  // if (!isAuthenticated) {
  //   return <button onClick={handleSignIn}>Signin with Google</button>;
  // }
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleSignIn}>Signin with Google</button>
    </div>
  );
};

export default Welcome;
