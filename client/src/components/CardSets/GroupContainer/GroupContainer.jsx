import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleGroup from './SingleGroup';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;
// List of all available hearthstone classes, with corresponding IDs as they appear on the official hearthstone API
const classes = [
  { name: 'Demon Hunter', id: 14 },
  { name: 'Druid', id: 2 },
  { name: 'Hunter', id: 3 },
  { name: 'Mage', id: 4 },
  { name: 'Paladin', id: 5 },
  { name: 'Priest', id: 6 },
  { name: 'Rogue', id: 7 },
  { name: 'Shaman', id: 8 },
  { name: 'Warlock', id: 9 },
  { name: 'Warrior', id: 10 },
  { name: 'Neutral', id: 12 },
];

const GroupContainer = props => {
  const [classesCards, setClassesCards] = useState();
  useEffect(() => {

    const newArray = [];
    // Create an array of different hearthstone class cards from an array of a list of unordered cards
    classes.map(ele => {
      ele &&
        newArray.push(
          props.expansionCardList.filter(item => item.classId === ele.id)
        );
    });
    setClassesCards(newArray);
    console.log(classesCards);
  }, [props.expansionCardList]);

  return (
    <Container>
      {classesCards &&
        classesCards.map(
          (ele, index) =>
            ele && (
              <SingleGroup
                metaData={props.metaData}
                classNumber={classesCards[index][0].classId}
                key={ele.dbfId}
                singleClassCardList={ele}
                classes={classes}
              />
            )
        )}
    </Container>
  );
};

export default GroupContainer;
