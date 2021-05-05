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
  const [blizzardApiKey, setBlizzardApiKey] = useState();
  useEffect(() => {
    const callAPI = () => {
      fetch('http://localhost:9000/keysapi')
        // fetch('http://192.168.1.8:9000/')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setRapidApiKey(data.apiKey);
          setBlizzardApiKey(data.blizzardApiKey);
        });
    };
    const options = {
      url:
        'https://us.api.blizzard.com/hearthstone/metadata?locale=en_US&access_token=US3p0I66qZ08DBY5hhYdn8MF00EdQ7Nszz',
      // 'content-type': 'application/json; charset=utf-8',
    };
    fetch('http://localhost:9000/keysAPI', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async res => await console.log(res.json()));
    const blizzardApi = async () => {
      axios.request(options).then(ele => console.log(ele.data));
    };
    // blizzardApi();
    callAPI();

    // newRequest();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes blizzardApiKey={blizzardApiKey} apiKey={rapidApiKey} />
    </div>
  );
};

export default App;
