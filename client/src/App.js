import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';
import axios from 'axios';
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

  const [rapidApiKey, setRapidApiKey] = useState();
  const [blizzardToken, setblizzardToken] = useState();
  useEffect(() => {
    const callAPI = () => {
      fetch('http://localhost:9000/keysapi')
        // fetch('http://192.168.1.8:9000/')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setRapidApiKey(data.apiKey);
          setblizzardToken(data.blizzardToken);
        });
    };
    const options = {
      url: `https://us.api.blizzard.com/hearthstone/cards?set=rise-of-shadows?locale=en_US&access_token=${blizzardToken}`,
      // 'content-type': 'application/json; charset=utf-8',
    };
    // fetch('http://localhost:9000/keysapi').then(
    //   async res => await console.log(res)
    // );
    const blizzardApi = async () =>
      await axios.request(options).then(ele => console.log(ele.data));
    blizzardApi();
    callAPI();

    // newRequest();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes blizzardToken={blizzardToken} apiKey={rapidApiKey} />
    </div>
  );
};

export default App;
