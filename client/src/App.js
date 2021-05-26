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
  const [metaData, setMetaData] = useState();
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
    console.log(metaData);
  }, [blizzardToken]);

  const printNumber=num=>{
    for(let i = 0; i < 1000; i++){

    if(i % 2 === 0){
      items.push(<p>123</p>)
    }
    else{
      items.push(<p>qweqw</p>)
    }
  }
  }
  const forEle = (int) => {
    for(let i = 0; i < int; i++){
      printNumber(i)
    }
  }
  printNumber()
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
