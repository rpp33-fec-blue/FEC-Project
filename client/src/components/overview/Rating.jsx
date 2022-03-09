import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ReviewStars from '../reviewStars.jsx'
import ErrorBoundary from '../ErrorBoundary.jsx';

const Rating = ({ metadata }) => {

  var noReviews = false;
  var numberOfRatings = 0;
  var sumOfRatings = 0;

  if (Object.keys(metadata.ratings).length === 0) {
    noReviews = true;
  } else {
    for (var rating in metadata.ratings) {
      var numberOfRating = Number(metadata.ratings[rating]);
      numberOfRatings += numberOfRating;
      sumOfRatings += (numberOfRating * rating);
    }
  }

  if (noReviews) {
    return null;
  } else {
    return (
      <ErrorBoundary component={'Rating'}>
        <div className='rating-component bottom-20px'>
          <ReviewStars ratings={metadata.ratings} /> <a className='overview-text rating-link' href='#'>Read all {numberOfRatings} reviews</a>
        </div>
      </ErrorBoundary>
    );
  }
};

Rating.propTypes = {
  metadata: statePropTypes.metadataPropTypes
};

export default Rating;