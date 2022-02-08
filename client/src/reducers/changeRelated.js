import initialState from '../initialState';

const changeRelated = (state = initialState.relatedProducts, action) => {
  if (action.type === 'CHANGE_RELATED') {
    return action.relatedProducts;
  }
  return state;
};

export default changeRelated;