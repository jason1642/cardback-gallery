import React from 'react';
import { Route } from 'react-router-dom';
import CardbackGallery from '../CardGalleryContainer/CardGalleryContainer';

const Routes = props => {
  return (
    <>
      <Route
        exact
        path="/cardbacks"
        render={() => <CardbackGallery cardbackList={props.cardbackList} />}
      />
      {/* <Route path="/" re1nder={() => <Main cardbackList={cardbackList} />} /> */}
    </>
  );
};

export default Routes;
