const changeProductInfo = ( productInfo ) => {
  return {
    type: 'CHANGE_PRODUCT_INFO',
    productInfo: productInfo
  };
};

export default changeProductInfo;