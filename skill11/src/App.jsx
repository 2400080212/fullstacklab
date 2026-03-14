import React from 'react';
import AxiosData from './components/AxiosData';
import FetchLocalData from './components/FetchLocalData';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React API Integration Demo</h1>
      <hr />
      <FetchLocalData />
      <hr />
      <AxiosData />
    </div>
  );
}

export default App;