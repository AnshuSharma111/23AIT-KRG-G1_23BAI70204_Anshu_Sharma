import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogs } from './store/logSlice';
import Refresh from './compenents/Refresh';

function App() {
  const dispatch = useDispatch();
  const [ logs, status, error ] = useSelector((state) => [
    state.logs,
    state.logs.status,
    state.logs.error,
  ]);

  useState(() => {
    dispatch(fetchLogs());
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}<Refresh /></div>;
  }

  return (
    <>
      <h1> THE LOGS </h1>
      <ul>
        {logs.data.map((log) => (
          <li key={log.id}>{log.activity} : {log.carbon}</li>
        ))}
      </ul>
      <Refresh />
    </>
  )
}

export default App