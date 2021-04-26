import React from 'react';
import { Route } from 'react-router-dom';
import CardbackGallery from '../CardBackGalleryContainer/CardBackGalleryContainer';
import HomePage from '../HomePage/HomePage';
import CardSets from '../CardSets/CardSetsContainer';
import CardSetGallery from '../CardSets/CardSetGallery';

const Routes = props => {
  return (
    <>
      <Route
        exact
        path="/cardbacks"
        render={() => <CardbackGallery apiKey={props.apiKey} />}
      />
      <Route
        exact
        path="/cardsets"
        render={() => (
          <CardSets apiKey={props.apiKey} cardbackList={props.cardbackList} />
        )}
      />
      <Route
        exact
        path="/expansion-card-set/:expansionName"
        render={routerProps => (
          <CardSetGallery {...routerProps} apiKey={props.apiKey} />
        )}
      />
      <Route exact path="/" render={() => <HomePage />} />
    </>
  );
};

export default Routes;
