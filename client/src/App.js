import React, { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
const App = () => {
  // dotenv variable, from /api. See .sample.env
  // const [apiKey, setApiKey] = useState();
  const callAPI = () => {
    fetch('http://localhost:9000/')
      .then(res => res.text())
      .then(res => console.log(res));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      <Header />
      <Route path="/" render={() => <Main />} />
    </div>
  );
};

export default App;
