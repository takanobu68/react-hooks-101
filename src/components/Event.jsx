import React, { useContext } from 'react';

import Events from '../components/Events';
import AppContext from '../contexts/AppContext';

const Event = ({ state, dispatch }) => {
  const value = useContext(AppContext);
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Events key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Event;
