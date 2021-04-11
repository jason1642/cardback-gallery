import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import CardGalleryContainer from '../CardGalleryContainer/CardGalleryContainer';
import SearchBar from '../SearchBar/SearchBar';
import Divider from './Divider';
import NoCardsFound from './NoCardsFound';

const Container = styled.div`
  background-color: #6e6a6a;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  min-height: 100%;
  /* padding: 0 45px; */
`;

const Main = props => {
  const [filteredCardArray, setFilteredCardArray] = useState();
  const [shouldFilter, setShouldFilter] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleSearchInput = input => {
    setUserInput(input);
  };
  const filterCards = input => {
    // if (input === '') return null;
    const list1 = props.cardbackList.data;
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
  return (
    <>
      <Container>
      <SearchBar handleSearchInput={handleSearchInput} />
        {props.cardbackList ? (
          <>
            
            <Divider></Divider>
            {/*  */}
            {userInput === '' ? (
              <CardGalleryContainer cardbackList={props.cardbackList} />
            ) : (
              <>{filterCards()}</>
            )}
            {/*  */}
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Main;
