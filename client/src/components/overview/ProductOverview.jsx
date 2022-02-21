import React from 'react';

const ProductOverview = ( { productInfo } ) => {

  return (
    <div className='productOverview-component'>
      <h6>Slogan: {productInfo.slogan}</h6>
      <p>Description: {productInfo.description}</p>
      <p>Features:</p>
      <ul>
        {productInfo.features.map((feature, index) => <li key={index}>{feature.feature + ': ' + feature.value}</li>)}
      </ul>
    </div>
  );
}

export default ProductOverview;