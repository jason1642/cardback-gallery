import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleGroup from './SingleGroup';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
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
  const [classesCards, setClassesCards] = useState();

  useEffect(() => {
    const newArray = [];
    classes.map(ele =>
      newArray.push(
        props.expansionCardList.filter(item => item.playerClass === ele)
      )
    );
    setClassesCards(newArray);
    console.log(classesCards);
  }, [props.expansionCardList]);

  return (
    <Container>
      {/* {classesCards && classesCards.map(ele => console.log(ele))} */}
      {console.log(classesCards)}
      {classesCards &&
        classesCards.map(
          ele =>
            ele && <SingleGroup key={ele.dbfId} singleClassCardList={ele} />
          // console.log(ele)
        )}
    </Container>
  );
};

export default GroupContainer;
