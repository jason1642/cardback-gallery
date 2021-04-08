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

const SearchBar = props => {
  const [userInput, setUserInput] = useState('');
  const handleChange = e => {
    setUserInput(e.target.value);
    console.log(userInput);
    props.handleSearchInput(userInput);
  };
  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <Container>
      <Input
        value={userInput}
        onChange={handleChange}
        placeholder="Search for a card name"
      />
    </Container>
  );
};

export default SearchBar;
