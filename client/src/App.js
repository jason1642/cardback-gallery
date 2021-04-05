import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [apiResponse, setApiResponse] = useState();
  const callAPI = () => {
    fetch('http://localhost:9000/')
      .then(res => res.text())
      .then(res => setApiResponse(res));
  };

  useEffect(() => {
    callAPI();
    console.log(apiResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p className="App-intro">{apiResponse}</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
