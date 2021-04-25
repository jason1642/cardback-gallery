import React from 'react';
import { Route } from 'react-router-dom';
import CardbackGallery from '../CardBackGalleryContainer/CardBackGalleryContainer';
import HomePage from '../HomePage/HomePage';
import CardSets from '../CardSets/CardSetsContainer';

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
      <Route exact path="/" render={() => <HomePage />} />
    </>
  );
};

export default Routes;
