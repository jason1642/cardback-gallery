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
