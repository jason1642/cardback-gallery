import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #6e6a6a;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  min-height: 100%;
  /* padding: 0 45px; */
`;

const HomePage = props => {
  return (
    <>
      <Container>
        Welcome!
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          veniam, et optio itaque at facilis laboriosam maiores odit, fugit rem
          error magni nostrum dolorem voluptas delectus natus illum incidunt
          ratione?
        </p>
      </Container>
    </>
  );
};

export default HomePage;
