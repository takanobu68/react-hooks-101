import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers/index';
import EventForm from './EventForm';
import Event from '../components/Event';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Event state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
