const changeReviews = (reviews) => {
  return {
    type: 'CHANGE_REVIEWS',
    reviews: reviews
  };
};

export default changeReviews;