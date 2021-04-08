import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Card.css';

const Image = styled.div`
  height: 400px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 18%;
  margin: 25px 10px;
`;
const Label = styled.p`
  text-align: center;
  font-size: 20px;
`;
const Card = props => {
  return (
    <Container>
      <Image
        className="card"
        style={{ backgroundImage: `url(${props.cardInfo.imgAnimated})` }}
      ></Image>
      <Label>{props.cardInfo.name}</Label>
    </Container>
  );
};

export default Card;
