const ProductOverview = ( { productInfo } ) => {

  var listItem = 1;

  return (
    <div>
      <h6>Slogan: {productInfo.slogan}</h6>
      <p>Description: {productInfo.description}</p>
      <p>Features:</p>
      <ul>
        {productInfo.features.map((feature) => <li key={listItem++}>{feature.feature + ': ' + feature.value}</li>)}
      </ul>
    </div>
  );
}

export default ProductOverview;