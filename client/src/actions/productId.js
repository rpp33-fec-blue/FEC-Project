const changeProductId = (productId) => {
  return {
    type: 'CHANGE_PRODUCT',
    productId: productId
  };
};

export default changeProductId;