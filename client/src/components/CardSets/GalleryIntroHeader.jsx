import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  padding: 5em 0 7.5em;

  text-align: center;
  background-size: cover;
  /* background-position: top; */
  background-repeat: no-repeat;
  background-image: url('https://cdn.wallpapersafari.com/92/94/7G4KC0.jpg');
`;
const Title = styled.h2`
  font-size: 1.9em;
  font-family: Belwe Bold, Georgia, Times, Times New Roman, serif;
`;
const Intro = styled.div`
  font-size: 1.5em;
`;
const Description = styled.div``;
const GalleryIntroHeader = () => {
  return (
    <Container>
      <Intro>
        <Title>Card Sets </Title>
        <Description>
          Every Hearthstone card is part of a set. You can complete the Basic
          Set simply by playing the game, but to get cards from the other sets
          you’ll have to either spend some gold or real money.
        </Description>
      </Intro>
    </Container>
  );
};

export default GalleryIntroHeader;
