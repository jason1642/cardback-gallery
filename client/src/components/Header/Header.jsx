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
const Header = () => {
  return <Container>This is a header</Container>;
};

export default Header;
