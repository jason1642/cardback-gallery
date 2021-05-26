import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './CardBack.css';
import CardInfoModal from './CardBackInfoModal';

const Image = styled.div`
  height: 350px;
  width: 240px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 18%;
  margin: 0px 5px 30px;
`;
const Label = styled.p`
  font-family: Belwe Bold, Georgia, Times, Times New Roman, serif;
  text-align: center;
  font-size: 20px;
  inset: 100% 0px 5px;
  color: #4d2a2a;
  margin: auto;
  font-size: 20px;
  font-weight: 700px;
  padding: 33px;
`;
const Card = props => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container onClick={handleOpen}>
      <Image
        className="card"
        style={{ backgroundImage: `url(${props.cardInfo.img})` }}
      />
      <CardInfoModal
        handleClose={handleClose}
        isOpen={open}
        cardInfo={props.cardInfo}
      />

      <Label>{props.cardInfo.name}</Label>
    </Container>
  );
};

export default Card;
