import React, { useState, useContext } from 'react';
import initFirebase from '../firebase/initialize';

const FirebaseContext = React.createContext();

const FirebaseProvider = ({ children }) => {
  const [state, setState] = useState({});
  React.useEffect(() => {
    (async () => {
      const { app, auth, provider } = await initFirebase();
      setState({ app, auth, provider });
    })();
  }, []);
  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
};

const useFirebase = () => useContext(FirebaseContext);

export { FirebaseProvider, useFirebase };
