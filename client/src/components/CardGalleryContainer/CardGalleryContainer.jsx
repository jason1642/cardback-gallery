import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const CardGrid = props => {
  return (
    <Container>
      {props.cardbackList &&
        props.cardbackList.data.map(ele => (
          <Card key={ele.cardBackId} cardInfo={ele} />
        ))}
    </Container>
  );
};

export default CardGrid;
