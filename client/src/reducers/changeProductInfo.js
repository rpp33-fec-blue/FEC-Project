import initialState from './initialState';

const changeProductInfo = (state = initialState.productInfo, action) => {
  if (action.type === 'CHANGE_INFO') {
    return action.productInfo;
  }
  return state;
};

export default changeProductInfo;