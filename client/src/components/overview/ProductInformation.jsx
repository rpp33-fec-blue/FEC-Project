import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import Rating from './Rating.jsx';
import Price from './Price.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

const ProductInformation = ({ productId, productInfo, metadata, styles, selectedStyleIndex }) => {

  return (
    <ErrorBoundary component={'ProductInformation'}>
      <div className='productInformation-component'>
        <Rating metadata={metadata} />
        <h4>{productInfo.category.toUpperCase()}</h4>
        <h2>{productInfo.name}</h2>
        <Price styles={styles} selectedStyleIndex={selectedStyleIndex} />
      </div>
    </ErrorBoundary>
  );
};

ProductInformation.propTypes = {
  productId: statePropTypes.productIdPropType,
  productInfo: statePropTypes.productInfoPropTypes,
  metadata: statePropTypes.metadataPropTypes,
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
};

export default ProductInformation;