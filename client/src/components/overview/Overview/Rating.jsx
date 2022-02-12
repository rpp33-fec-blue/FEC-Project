const Rating = () => {

  // Props: metadata

  return (
    <div>
      <p>TO DO - stars</p>
      <a href="#">Read all ${'#'} of reviews</a>
    </div>
  );
};

export default Rating;










/*

const Rating = ({ metadata }) => {
  var numberOfReviews = 0;
  var averageReview = 0;
  for (var rating in metadata.ratings) {
    numberOfReviews += metadata.ratings[rating];
    averageReview += (metadata.ratings[rating] * rating);
  }
  averageReview = averageReview / numberOfReviews;

  // TO DO - return proper stars

  return (
    <div>
      <p>Rating: {averageReview}</p>
      <a href='#'>Read all ${numberOfReviews} reviews</a>
    </div>
  );
}

export default Rating;

*/