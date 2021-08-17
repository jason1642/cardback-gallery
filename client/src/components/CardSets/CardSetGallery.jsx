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

  // Array of objects representing cards from the expansion queried for
  const [expansionCardList, setExpansionCardList] = useState();
  const [currentSortOption, setCurrentSortOption ] = useState("Mana: Low to High")
  useEffect(() => {

    const cardBackFetchList = async apiKey => {
      const options = {
        method: 'GET',
        params: {
          collectible: '1',
          pageSize: 400,
          set: props.match.params.expansionName.toLowerCase(),
        },
        url: `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${apiKey}`,
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
    props.blizzardToken && cardBackFetchList(props.blizzardToken);
  }, [props.blizzardToken]);
  const changeOrderOption = order => {
    setCurrentSortOption(order)
  }
 
  return (
    <Container>
      {expansionCardList && (
        <>
          <SetGalleryHeader
            expansionName={props.match.params.expansionName}
            expansionCardList={expansionCardList.cards}
            changeOrderOption={changeOrderOption}
          />
          <GroupContainer
            metaData={props.metaData}
            expansionCardList={expansionCardList.cards}
            currentSortOption={currentSortOption}
            
          />
        </>
      )}
    </Container>
  );
};

export default CardSetGallery;
