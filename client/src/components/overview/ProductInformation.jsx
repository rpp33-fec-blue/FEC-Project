import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import Rating from './Rating.jsx';
import ProductOverview from './ProductOverview.jsx';
import Price from './Price.jsx';
import OutfitToggle from './OutfitToggle.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

const ProductInformation = ({ productId, metadata, productInfo, styles, selectedStyleIndex, outfit, handleAddOutfit, handleRemoveOutfit }) => {

  return (
    <ErrorBoundary component={'ProductInformation'}>
      <div className='productInformation-component'>
        <h2>Product Information</h2>
        <Rating metadata={metadata} />
        <h2>Name: {productInfo.name}</h2>
        <h4>Category: {productInfo.category}</h4>
        <ProductOverview productInfo={productInfo} />
        <Price styles={styles} selectedStyleIndex={selectedStyleIndex} />
        <OutfitToggle
          productId={productId}
          outfit={outfit}
          handleAddOutfit={handleAddOutfit}
          handleRemoveOutfit={handleRemoveOutfit}
        />
      </div>
    </ErrorBoundary>
  );
};

ProductInformation.propTypes = {
  productId: statePropTypes.productIdPropType,
  productInfo: statePropTypes.productInfoPropTypes,
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  cart: statePropTypes.cartPropTypes,
  outfit: statePropTypes.outfitPropTypes,
  handleAddOutfit: PropTypes.func,
  handleRemoveOutfit: PropTypes.func
};

export default ProductInformation;