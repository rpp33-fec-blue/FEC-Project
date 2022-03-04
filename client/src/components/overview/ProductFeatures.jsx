import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const ProductFeatures = ({ productInfo }) => {

  return (
    <ErrorBoundary component='ProductFeatures component'>
      <div className='product-features-component'>
        <ul>
          {productInfo.features.map((feature, index) => <li key={index}>{feature.feature + ': ' + feature.value}</li>)}
        </ul>
      </div>
    </ErrorBoundary>
  );
}

ProductFeatures.propTypes = {
  productInfo: statePropTypes.productInfoPropTypes
};

export default ProductFeatures;