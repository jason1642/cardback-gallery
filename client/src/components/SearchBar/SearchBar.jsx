import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 98%;
  height: 60px;
  margin: 0 auto;
  border-radius: 5px;
`;
const Input = styled.input`
  height: 100%;
  width: 50%;
  font-size: 25px;
  border-radius: 15px;
  margin: 20px 0;
  outline: none;
  padding-left: 10px;

`;

const SearchBar = props => {
  const [userInput, setUserInput] = useState('');
  const handleChange = e => {
    setUserInput(e.target.value);
    console.log(userInput);
    props.handleSearchInput(e.target.value);
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
