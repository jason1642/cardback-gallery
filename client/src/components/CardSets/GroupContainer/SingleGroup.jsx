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
  // If true, the cards are sorted from low to high mana cost, opposite if false
  const [cardList, setCardList] = useState();
  const [groupClassName, setGroupClassName] = useState();
  
  useEffect(() => {
    setCardList(props.singleClassCardList);
      // Find corresponding class id with props class data and meta data id to get hearthstone class object
      props.metaData && setGroupClassName(props.metaData.classes.find(ele=>ele.id === props.classNumber))
    
  },[props, props.metaData]
  );
  
  return (
    <Container>
      <Header>
        <Title>{cardList && groupClassName.name}</Title>
      </Header>
      {props.singleClassCardList &&
        props.singleClassCardList.map(ele => (
          <Card metaData={props.metaData} cardInfo={ele} />
        ))}
    </Container>
  );
};

export default SingleGroup;
