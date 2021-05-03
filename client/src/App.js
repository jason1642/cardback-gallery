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
      fetch('http://localhost:9000/')
        // fetch('http://192.168.1.8:9000/')
        .then(res => res.json())
        .then(data => {
          setRapidApiKey(data.apiKey);
          setBlizzardApiKey(data.blizzardApiKey);
        });
    };
    const options = {
      url:
        'https://us.api.blizzard.com/hearthstone/metadata?locale=en_US&access_token=US3p0I66qZ08DBY5hhYdn8MF00EdQ7Nszz',
      // 'content-type': 'application/json; charset=utf-8',
    };
    const blizzardApi = async () => {
      axios.request(options).then(ele => console.log(ele.data));
    };
    // blizzardApi();
    callAPI();
    const newRequest = () => {
      axios
        .request({
          method: 'post',
          url:
            'https://us.battle.net/oauth/token?client_id=45f1d1861db249238e553034fc29a8b2&client_secret=Kno5gqGPHEbB7fmz4bJoUMESJFD6uBpz&grant_type=client_credentials',
          // grant_type: 'client_credentials',
          // client_id: '45f1d1861db249238e553034fc29a8b2',
          // client_secret: 'Kno5gqGPHEbB7fmz4bJoUMESJFD6uBpz',
        })
        .then(ele => console.log(ele.data.access_token));
      console.log('qweqwewq21');
    };
    newRequest();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes blizzardApiKey={blizzardApiKey} apiKey={rapidApiKey} />
    </div>
  );
};

export default App;
