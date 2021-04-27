import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
const LinkWrap = styled(Link)``;
const CardSetContainer = props => {
  const [hearthstoneInfo, setHearthstoneInfo] = useState();
  useEffect(() => {
    const cardBackFetchList = async apiKey => {
      const options = {
        method: 'GET',
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      };
      axios
        .request(options)
        .then(res => {
          console.log(res.data);
          setHearthstoneInfo(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    };
    cardBackFetchList(props.apiKey);
  }, [props.apiKey]);
  return (
    <Container>
      <Title>Standard Sets: </Title>
      {hearthstoneInfo &&
        hearthstoneInfo.standard.map(ele => (
          <LinkWrap to={`/expansion-card-set/${ele}`}>
            <SetBox>{ele}</SetBox>
          </LinkWrap>
        ))}
    </Container>
  );
};

export default CardSetContainer;
