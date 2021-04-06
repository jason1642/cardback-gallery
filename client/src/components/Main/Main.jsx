import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
const Container = styled.div`
  background-color: #6e6a6a;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* padding: 0 45px; */
`;

const Main = () => {
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
          console.log(res.data);
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

  return (
    <>
      {cardbackList ? (
        <Container>
          <SearchBar />
          {cardbackList &&
            cardbackList.data.map(ele => <Card cardInfo={ele} />)}
          {/* // <Card cardInfo={cardbackList.data[0]} /> */})
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
