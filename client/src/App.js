import React, { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
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

  const [cardbackList, setCardbackList] = useState();
  useEffect(() => {
    const fetchList = async apiKey => {
      const options = {
        method: 'GET',
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      };
      axios
        .request(options)
        .then(res => {
          // console.log(res.data);
          setCardbackList(res);
        })
        .catch(err => {
          console.error(err);
        });
    };
    const callAPI = () => {
      fetch('http://localhost:9000/')
        .then(res => res.text())
        .then(res => fetchList(res));
    };
    callAPI();
  }, []);
  let items = []

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
      {items}
      <Route path="/" render={() => <Main cardbackList={cardbackList} />} />
    </div>
  );
};

export default App;
