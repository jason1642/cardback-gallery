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
  background-color: orange;
  border: 1px solid black;
  padding: 20px;
  margin: 30px auto;
  &:hover {
    background-color: #f7c871;
  }
`;
const Title = styled.h1`
  margin: 0;
  padding: 25px 0;
`;
const LinkWrap = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2em;
`;
const CardSetContainer = props => {
  const [metaData, setMetaData] = useState();
  useEffect(() => {
    setMetaData(props.metaData);
    // console.log(props.metaData.setGroups[7]);
  }, [props.metaData]);
  return (
    <Container>
      <GalleryIntroHeader />
      <h2>Standard Sets: </h2>
      {metaData &&
        metaData.setGroups[7].cardSets.map((ele, index) => (
          <LinkWrap key={index} to={`/expansion-card-set/${ele}`}>
            <SetBox>
              {ele.split('-').join('-').replaceAll('-', ' ').toUpperCase()}
            </SetBox>
          </LinkWrap>
        ))}
    </Container>
  );
};

export default CardSetContainer;
