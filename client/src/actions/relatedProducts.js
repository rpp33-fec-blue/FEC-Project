const changeRelated = (relatedProducts) => {
  return {
    type: 'CHANGE_RELATED',
    relatedProducts: relatedProducts
  };
};

export default changeRelated;