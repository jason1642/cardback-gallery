import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card/Card';
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const CardSetGallery = props => {
  const [expansionCardList, setExpansionCardList] = useState();
  useEffect(() => {
    const cardBackFetchList = async apiKey => {
      const options = {
        method: 'GET',
        params: { collectible: '1' },
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${props.match.params.expansionName}`,
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      };
      axios
        .request(options)
        .then(res => {
          // console.log(res.data);
          setExpansionCardList(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    };
    cardBackFetchList(props.apiKey);
  }, [props.apiKey]);
  // console.log(props.match.params.expansionName);

  return (
    <Container>
      {console.log(expansionCardList)}
      {expansionCardList &&
        expansionCardList.map(ele => <Card cardInfo={ele} />)}
    </Container>
  );
};

export default CardSetGallery;
