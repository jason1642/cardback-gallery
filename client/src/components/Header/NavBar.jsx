import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;

  /* height: 50%; */
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  /* font-size: 1.2em; */
  &:hover {
    cursor: pointer;
    background-color: grey;
  }
`;
const NavBar = () => {
  return (
    <Container>
      <Nav to="/cardsets">Card Sets</Nav>
      {/* see all */}
      {/* latest expansion */}
      {/* decending expansions - limit 3 */}
      <Nav to="/cardbacks">Card Backs</Nav>
      <Nav>Info</Nav>
      <Nav>News</Nav>
    </Container>
  );
};

export default NavBar;
