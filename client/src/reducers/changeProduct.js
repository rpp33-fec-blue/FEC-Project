import initialState from './initialState';

const changeProduct = (state = initialState.productId, action) => {
  if (action.type === 'CHANGE_PRODUCT') {
    return action.productId;
  }
  return state;
};

export default changeProduct;