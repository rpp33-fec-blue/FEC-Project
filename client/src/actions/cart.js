const changeCart = (items) => {
  return {
    type: 'CHANGE_CART',
    cart: items
  };
};

export default changeCart;