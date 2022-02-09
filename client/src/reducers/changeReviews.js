import initialState from '../initialState';

const changeReviews = (state = initialState.reviews, action) => {
  if (action.type === 'CHANGE_REVIEWS') {
    return action.reviews;
  }
  return state;
};

export default changeReviews;