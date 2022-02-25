import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const Rating = ({ metadata }) => {

  var numberOfRatings = 0;
  var sumOfRatings = 0;
  for (var rating in metadata.ratings) {
    var numberOfRating = Number(metadata.ratings[rating]);
    numberOfRatings += numberOfRating;
    sumOfRatings += (numberOfRating * rating);
  }
  const averageRating = sumOfRatings / numberOfRatings;
  const wholeStars = Math.floor(averageRating);
  const partialStar = averageRating - wholeStars;
  var roundedAverageRating;
  if (partialStar !== 0) {
    if (partialStar > 0 && partialStar < 0.125) {
      roundedAverageRating = wholeStars;
    } else if (partialStar >= 0.125 && partialStar < 0.375) {
      roundedAverageRating = wholeStars + 0.250;
    } else if (partialStar >= 0.375 && partialStar < 0.625) {
      roundedAverageRating = wholeStars + 0.500;
    } else if (partialStar >= 0.625 && partialStar < 0.875) {
      roundedAverageRating = wholeStars + 0.750;
    } else {
      roundedAverageRating = wholeStars + 1;
    }
  }

  return (
    <ErrorBoundary component={'Rating'}>
      <div className='rating-component'>
        <span>Rating: {roundedAverageRating} stars</span><span href='#'> Read all {numberOfRatings} reviews</span> {/* TO DO - convert to actual stars and link to reviews */}
      </div>
    </ErrorBoundary>
  );
};

Rating.propTypes = {
  metadata: statePropTypes.metadataPropTypes
};

export default Rating;