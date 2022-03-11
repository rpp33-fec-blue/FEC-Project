import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const ProductOverview = ({ productInfo }) => {

  return (
    <ErrorBoundary>
      <div className='productOverview-component'>
        <div className='l700-font'>{productInfo.slogan}</div>
        <p className='overview-text'>{productInfo.description}</p>
      </div>
    </ErrorBoundary>
  );
}

ProductOverview.propTypes = {
  productInfo: statePropTypes.productInfoPropTypes
};

export default ProductOverview;