import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import NoCardsFound from '../HomePage/NoCardsFound';
import SearchBar from '../SearchBar/SearchBar';
import Divider from '../HomePage/Divider';
import axios from 'axios';

import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
`;

const CardBackGalleryContainer = props => {
  // console.log(props);
  const [cardbackList, setCardbackList] = useState();
  const [userInput, setUserInput] = useState('');

  const handleSearchInput = input => {
    setUserInput(input);
  };
  const filterCards = input => {
    // if (input === '') return null;
    const list1 = cardbackList.data;
    console.log(input);
    const reg = new RegExp(`${userInput}`, 'ig');
    const newList = list1.filter(ele => ele.name.match(reg));

    console.log(newList);
    return newList.length > 0 ? (
      newList.map(ele => <Card cardInfo={ele} />)
    ) : (
      <NoCardsFound />
    );
  };

  useEffect(() => {
    const cardBackFetchList = async apiKey => {
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
    cardBackFetchList(props.apiKey);
  }, [props.apiKey]);
  return (
    <Container>
      <SearchBar handleSearchInput={handleSearchInput} />
      {/* {console.log(props)} */}
      {cardbackList ? (
        <>
          <Divider></Divider>
          {/*  */}
          {userInput === '' ? (
            // <CardGalleryContainer cardbackList={cardbackList} />
            cardbackList &&
            cardbackList.data.map(ele => (
              <Card key={ele.cardBackId} cardInfo={ele} />
            ))
          ) : (
            <>{filterCards()}</>
          )}
          {/*  */}
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CardBackGalleryContainer;
