import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  /* margin-bottom: 40px; */
  font-size: 25px;
  height: 100px;
  width: 100%;
  background-image: url('https://image.freepik.com/free-photo/light-brown-kraft-paper-texture-banner-background_8087-1918.jpg');
  
`;
const Title = styled.h1`
  font-weight: 500;
  color: #fffbee;
`
const Header = () => {
  return <Container>
    <Title>Hearthstone Cardback Gallery</Title>
    </Container>;
};

export default Header;
