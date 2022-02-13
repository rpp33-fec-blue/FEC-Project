const ProductOverview = ( { productInfo } ) => {

  // Props: productInfo

  return (
    <div>
      <h6>{productInfo.slogan}</h6>
      <p>{productInfo.description}</p>
      <p>TO DO - return product features</p>
    </div>
  );
}

export default ProductOverview;










/*

const ProductOverview = ({ productInfo }) => {
  return (
    <div>
      <h6>{productInfo.slogan}</h6>
      <p>{productInfo.description}</p>
      {productInfo.features.map((feature) => <p>{feature['feature'] + ': ' + feature.value}</p>)}
    </div>
  );
}

export default ProductOverview;

*/