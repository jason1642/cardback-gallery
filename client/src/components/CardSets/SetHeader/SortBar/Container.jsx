import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Dropdown from './Dropdown'

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 18em;
`
const Label = styled.h2`
  font-weight: 400;
  display: flex;
  justify-content: center;
`
const Container = () => {
  return ( 
    <Main>
      <Label>Sort By:</Label>
      <Dropdown/>
    </Main>
   );
}
 
export default Container;