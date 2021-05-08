import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import CardbackGallery from '../CardBackGalleryContainer/CardBackGalleryContainer';
import HomePage from '../HomePage/HomePage';
import CardSets from '../CardSets/CardSetsContainer';
import CardSetGallery from '../CardSets/CardSetGallery';
import styled from 'styled-components';

const Container = styled.div``;
const Routes = props => {
  const [headerHeight, setHeaderHeight] = useState();
  useEffect(() => {
    setHeaderHeight(document.getElementById('header').clientHeight);
  }, []);

  return (
    <Container
      style={{
        marginTop: `${
          headerHeight && document.getElementById('header').clientHeight
        }px`,
      }}
    >
      <Route
        exact
        path="/cardbacks"
        render={() => <CardbackGallery apiKey={props.apiKey} />}
      />
      <Route
        exact
        path="/cardsets"
        render={() => (
          <CardSets
            blizzardToken={props.blizzardToken}
            apiKey={props.apiKey}
            cardbackList={props.cardbackList}
          />
        )}
      />
      <Route
        exact
        path="/expansion-card-set/:expansionName"
        render={routerProps => (
          <CardSetGallery
            blizzardToken={props.blizzardToken}
            {...routerProps}
            apiKey={props.apiKey}
          />
        )}
      />
      <Route exact path="/" render={() => <HomePage />} />
    </Container>
  );
};

export default Routes;
