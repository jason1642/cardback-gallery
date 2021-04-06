import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 60px;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  font-size: 25px;
`;

const SearchBar = () => {
  const [userInput, setUserInput] = useState('');
  const handleChange = e => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <Container>
      <Input value={handleChange} placeholder="search for a card name" />
    </Container>
  );
};

export default SearchBar;
