import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const Authenticate = () => {
  return <Redirect to="/events" />;
};

export default Authenticate;
