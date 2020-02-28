import React, { useCallback } from 'react';
import useGapi from '../hooks/useGapi';
import calendarApi from '../gapi/calendarApi';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [api, setApi] = React.useState(null);

  const onGapiLoaded = useCallback(gapiClient =>
    setApi(calendarApi(gapiClient))
  );

  const googleApi = useGapi({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: 'https://www.googleapis.com/auth/calendar.events',
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
    ],
    ux_mode: 'redirect',
    redirect_uri: 'http://localhost:3000/authenticate/google',
    onLoaded: onGapiLoaded
  });

  return (
    <AuthContext.Provider
      value={{
        googleApi,
        api
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
