import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const ProductOverview = ({ productInfo }) => {

  return (
    <ErrorBoundary>
      <div className='productOverview-component'>
        <h6>Slogan: {productInfo.slogan}</h6>
        <p>Description: {productInfo.description}</p>
      </div>
    </ErrorBoundary>
  );
}

ProductOverview.propTypes = {
  productInfo: statePropTypes.productInfoPropTypes
};

export default ProductOverview;