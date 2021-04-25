import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';
const App = () => {
  // dotenv variable, from /api. See .sample.env
  // const [apiKey, setApiKey] = useState();
  // const callAPI = () => {
  //   fetch('http://localhost:9000/')
  //     .then(res => res.text())
  //     .then(res => console.log(res));
  // };

  // useEffect(() => {
  //   callAPI();
  // }, []);

  const [apiKey, setApiKey] = useState();
  useEffect(() => {
    const callAPI = () => {
      fetch('http://localhost:9000/')
        .then(res => res.text())
        .then(res => setApiKey(res));
    };
    callAPI();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes apiKey={apiKey} />
    </div>
  );
};

export default App;
