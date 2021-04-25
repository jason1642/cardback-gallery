import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  height: 100%;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
`;
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
      Standard Sets:{' '}
      {hearthstoneInfo.standard.map(ele => (
        <p>{ele}</p>
      ))}
      {console.log(hearthstoneInfo)}
    </Container>
  );
};

export default CardSetContainer;
