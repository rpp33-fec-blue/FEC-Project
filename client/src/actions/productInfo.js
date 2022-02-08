const changeProductInfo = (productInfo)) => {
  return {
    type: 'CHANGE_PRODUCTINFO',
    productInfo: productInfo
  };
};

export default changeProductInfo;