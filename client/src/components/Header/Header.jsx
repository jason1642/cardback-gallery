import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: grey;
  margin-bottom: 40px;
  font-size: 25px;
  height: 100px;
  width: 100%;
`;
const Title = styled.h1`
  font-weight: 500;
`
const Header = () => {
  return <Container>
    <Title>Hearthstone Cardback Gallery</Title>
    </Container>;
};

export default Header;
