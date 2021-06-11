import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers/index';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';
import Event from '../components/Event';
import OperationLogs from './OperationLogs';

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

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
