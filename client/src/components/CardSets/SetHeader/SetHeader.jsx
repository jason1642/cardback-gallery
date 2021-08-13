import React from 'react';
import styled from 'styled-components';
// dropdown sort bar to filter cards
import SortBar from './SortBar/Container'
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 0;
`;
// Title displays number of cards found and expansion name
const Title = styled.div`
  margin-left: 20px;
`;
const FilterBar = styled.div`
  display: flex;
  padding: 0 40px;
  /* align-self: flex-end; */
`;
const SetHeader = props => {
  console.log(props.expansionName);
  return (
    <Container>
      <Title>
        {props.expansionCardList.length} cards found for "{props.expansionName}"
      </Title>
      <SortBar/>
    </Container>
  );
};

export default SetHeader;
