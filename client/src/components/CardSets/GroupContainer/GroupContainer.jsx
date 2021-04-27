import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const classes = [
  'Demon Hunter',
  'Druid',
  'Hunter',
  'Mage',
  'Paladin',
  'Priest',
  'Rogue',
  'Shaman',
  'Warlock',
  'Warrior',
  'Nuetral',
];

const GroupContainer = props => {
  const [classesCards, setClassesCards] = useState([]);

  useEffect(() => {
    classes.map(ele =>
      setClassesCards(
        classesCards.concat(
          props.expansionCardList.filter(item => item.playerClass === ele)
        )
      )
    );
  }, [props.expansionCardList]);

  return (
    <Container>
      {classesCards && classesCards.map(ele => console.log(ele))}
      {console.log(classesCards)}
      {props.expansionCardList.map(ele => (
        <Card key={ele.dbfId} cardInfo={ele} />
      ))}
    </Container>
  );
};

export default GroupContainer;
