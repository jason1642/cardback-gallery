import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
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
`;
const Image = styled.img``;
const Header = () => {
  return (
    <Container>
      <Image src="https://cdn.iconscout.com/icon/free/png-512/hearthstone-2288562-1933807.png" />
      {/* <Title>Hearthstone Cardback Gallery</Title> */}
      <NavBar />
    </Container>
  );
};

export default Header;
