import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
const Container = styled.div`
  display: flex;
  border-top: 3px solid #726458;
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
  font-size: 2.1em;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;
const SingleGroup = props => {
  const [cardList, setCardList] = useState();
  useEffect(() => {
    setCardList(props.singleClassCardList);
    console.log(cardList);
  }, [props.singleClassCardList]);
  return (
    <Container>
      <Header>
        <Title>{cardList && props.nameOfClass}</Title>
      </Header>
      {props.singleClassCardList &&
        props.singleClassCardList.map(ele => (
          <Card metaData={props.metaData} cardInfo={ele} />
        ))}
    </Container>
  );
};

export default SingleGroup;
