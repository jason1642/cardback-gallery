import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  /* margin-bottom: 40px; */
  font-size: 25px;
  height: 50px;
  width: 100%;
  position: fixed;

  z-index: 5;
  background-image: url('https://image.freepik.com/free-photo/light-brown-kraft-paper-texture-banner-background_8087-1918.jpg');
`;
const Title = styled.h1`
  font-weight: 500;
  color: #fffbee;
`;
const Image = styled.img`
  height: 100%;
`;
const LogoButton = styled(Link)``;
const Header = props => {
  return (
    <Container id="header" data-testid="header">
      <LogoButton to="/">
        <Image src="https://cdn.iconscout.com/icon/free/png-512/hearthstone-2288562-1933807.png" />
      </LogoButton>
      <NavBar />
    </Container>
  );
};

export default Header;
