import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  /* align-items: flex-end; */
  height: 50%;
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 12px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;
const NavBar = () => {
  return (
    <Container>
      <Nav>Card Sets</Nav>
      <Nav>Card Sets</Nav>
      <Nav>Card Sets</Nav>
      <Nav>Card Sets</Nav>
    </Container>
  );
};

export default NavBar;
