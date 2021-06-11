import React, { useReducer, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers/index';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';
import Event from '../components/Event';
import OperationLogs from './OperationLogs';

const APP_KEY = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('appWithRedux', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Event />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
