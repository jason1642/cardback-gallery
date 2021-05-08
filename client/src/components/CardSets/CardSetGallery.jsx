import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SetGalleryHeader from './SetHeader/SetHeader';
import GroupContainer from './GroupContainer/GroupContainer';

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: center;
  background-image: url('https://previews.123rf.com/images/roystudio/roystudio1511/roystudio151100310/48782033-old-parchment-paper-texture-background.jpg');
`;
const CardSetGallery = props => {
  const [expansionCardList, setExpansionCardList] = useState();
  useEffect(() => {
    console.log(props);
    const cardBackFetchList = async apiKey => {
      const options = {
        method: 'GET',
        params: { collectible: '1' },
        url: `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${props.match.params.expansionName}&access_token=${props.blizzardToken}`,
        // headers: {
        //   'x-rapidapi-key': apiKey,
        //   'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        // },
      };
      axios
        .request(options)
        .then(res => {
          console.log(res.data);
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
      {expansionCardList && (
        <>
          {console.log(expansionCardList)}
          <SetGalleryHeader
            expansionName={props.match.params.expansionName}
            expansionCardList={expansionCardList}
          />
          <GroupContainer expansionCardList={expansionCardList} />
        </>
      )}
    </Container>
  );
};

export default CardSetGallery;
