import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
const Container = styled.div`
  display: flex;
  border-top: 3px solid black;
  border-radius: 5px 5px 0 0;
  flex-flow: row wrap;
  /* overflow: hidden; */
  width: 100%;
`;
const Header = styled.div`
  width: 100%;

  /* background-color: lightgreen; */
`;
const Title = styled.h2`
  text-align: center;
  font-size: 1.8em;
`;
const SingleGroup = props => {
  const [cardList, setCardList] = useState();
  useEffect(() => {
    setCardList(props.singleClassCardList);
  }, [props.singleClassCardList]);
  return (
    <Container>
      <Header>
        <Title>{cardList && cardList[0].playerClass}</Title>
      </Header>
      {props.singleClassCardList &&
        props.singleClassCardList.map(ele => <Card cardInfo={ele} />)}
    </Container>
  );
};

export default SingleGroup;
