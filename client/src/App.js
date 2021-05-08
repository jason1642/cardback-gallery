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
    // const options = {
    //   url: `https://us.api.blizzard.com/hearthstone/cards?set=rise-of-shadows?locale=en_US&access_token=${blizzardToken}`,
    // };
    const callAPI = async () => {
      fetch('http://localhost:9000/keysapi')
        // fetch('http://192.168.1.8:9000/')
        .then(res => res.json())
        .then(async data => {
          console.log(data.blizzardToken);
          setRapidApiKey(data.apiKey);
          setblizzardToken(data.blizzardToken);
        })
        .then(ele =>
          axios
            .request(
              `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=rise-of-shadows&access_token=${blizzardToken}`
            )
            .then(async ele => console.log(await ele.data))
        );
    };
    callAPI();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes blizzardToken={blizzardToken} apiKey={rapidApiKey} />
    </div>
  );
};

export default App;
