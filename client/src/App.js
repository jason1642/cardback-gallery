import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';
import axios from 'axios';
const App = () => {
 
  const [rapidApiKey, setRapidApiKey] = useState();
  const [blizzardToken, setblizzardToken] = useState();
  const [metaData, setMetaData] = useState();
  useEffect(() => {
   
    const callAPI = async () => {
      fetch('http://localhost:9000/keysapi')
        .then(res => res.json())
        .then(async data => {
          setRapidApiKey(data.apiKey);
          setblizzardToken(data.blizzardToken);
        });
    };
    callAPI();
  }, []);
  useEffect(() => {
    const fetchMetaData = apiKey => {
      axios
        .request(
          `https://us.api.blizzard.com/hearthstone/metadata?locale=en_US&access_token=${apiKey}`
        )
        .then(async ele => setMetaData(ele.data));
    };
    blizzardToken && fetchMetaData(blizzardToken);

  }, [blizzardToken]);

 
  return (
    <div className="App">
      <Header />
      <Routes
        metaData={metaData}
        blizzardToken={blizzardToken}
        apiKey={rapidApiKey}
      />
    </div>
  );
};

export default App;
