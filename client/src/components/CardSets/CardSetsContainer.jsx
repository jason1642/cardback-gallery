import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GalleryIntroHeader from './GalleryIntroHeader';
const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
`;
const SetBox = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  /* border: 1px solid black; */
  padding: 40px;
  margin: 30px auto;
  text-align: center;
  
  height: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: #f7c871;
  }
`;
const Title = styled.h1`
  margin: 0;
  text-align: center;
  padding: 25px 0;
`;
const LinkWrap = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.7em;
  width: 25%;
  margin: 1em;
  
`;
const SetLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const CardSetContainer = props => {
  const [metaData, setMetaData] = useState();
  useEffect(() => {
    setMetaData(props.metaData);
    // console.log(props.metaData.setGroups[7]);
  }, [props.metaData]);
  return (
    <Container>
      <GalleryIntroHeader />
      <Title>Standard Sets: </Title>
      <SetLinksContainer>
      {metaData &&
        metaData.setGroups[7].cardSets.map((ele, index) => (
          <LinkWrap key={index} to={`/expansion-card-set/${ele}`}>
            <SetBox>
              {ele.split('-').join('-').replaceAll('-', ' ').toUpperCase()}
            </SetBox>
          </LinkWrap>
        ))}
      </SetLinksContainer>
    </Container>
  );
};

export default CardSetContainer;
