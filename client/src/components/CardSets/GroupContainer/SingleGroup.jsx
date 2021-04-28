import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
const Container = styled.div`
  display: flex;
  border: 1px solid black;
  flex-flow: row wrap;
  /* overflow: hidden; */
  width: 100%;
`;
const Header = styled.div`
  height: 200px;
  background-color: lightgreen;
`;
const Title = styled.h2``;
const SingleGroup = props => {
  const [cardList, setCardList] = useState();
  useEffect(() => {
    setCardList(props.singleClassCardList);
  }, [props.singleClassCardList]);
  return (
    <Container>
      <Header>
        <Title>{cardList && console.log(cardList)}</Title>
      </Header>
      {props.singleClassCardList &&
        props.singleClassCardList.map(ele => <Card cardInfo={ele} />)}
    </Container>
  );
};

export default SingleGroup;
