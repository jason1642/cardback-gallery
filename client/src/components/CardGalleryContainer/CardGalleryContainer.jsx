import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import NoCardsFound from '../HomePage/NoCardsFound';
import SearchBar from '../SearchBar/SearchBar';
import Divider from '../HomePage/Divider';

import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const CardGrid = props => {
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
    <Container>
      <SearchBar handleSearchInput={handleSearchInput} />
      {console.log(props)}
      {props.cardbackList ? (
        <>
          <Divider></Divider>
          {/*  */}
          {userInput === '' ? (
            // <CardGalleryContainer cardbackList={props.cardbackList} />
            props.cardbackList &&
            props.cardbackList.data.map(ele => (
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

export default CardGrid;
