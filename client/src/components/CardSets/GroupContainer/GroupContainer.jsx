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
    classes.map(ele => {
      // console.log(props.metaData);
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
      {console.log(classesCards)}
      {classesCards &&
        classesCards.map(
          ele =>
            ele && (
              <SingleGroup
                metaData={props.metaData}
                nameOfClass={ele.name}
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
