import initialState from '../initialState';

const changeCart = (state = initialState.cart, action) => {
  if (action.type === 'CHANGE_CART') {
    return action.cart;
  }
  return state;
};

export default changeCart;