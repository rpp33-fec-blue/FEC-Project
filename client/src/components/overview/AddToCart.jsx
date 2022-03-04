import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartButton from './AddToCartButton.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

const AddToCart = ({
  selectedStyleIndex,
  styles,
  handleAddCart,
  sku,
  sizeSelected,
  quantitySelected,
  outOfStock,
  updateSizeSelectedAndSku,
  updateQuantitySelected,
  updateOutOfStock,
  addToCartClicked
}) => {

  if (addToCartClicked) {
    return (
      <ErrorBoundary component={'AddToCart'}>
        <div className='addToCart-component size-quantity-selectors'>
          <div className='red-text please-select'>Please select size</div>
          <SizeSelector
            styles={styles}
            selectedStyleIndex={selectedStyleIndex}
            sizeSelected={sizeSelected}
            updateSizeSelectedAndSku={updateSizeSelectedAndSku}
            outOfStock={outOfStock}
            updateOutOfStock={updateOutOfStock}
            addToCartClicked={addToCartClicked}
          />
          <QuantitySelector
            styles={styles}
            selectedStyleIndex={selectedStyleIndex}
            sku={sku}
            sizeSelected={sizeSelected}
            quantitySelected={quantitySelected}
            updateQuantitySelected={updateQuantitySelected}
          />
        </div>
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary component={'AddToCart'}>
        <div className='addToCart-component size-quantity-selectors'>
          <SizeSelector
            styles={styles}
            selectedStyleIndex={selectedStyleIndex}
            sizeSelected={sizeSelected}
            updateSizeSelectedAndSku={updateSizeSelectedAndSku}
            outOfStock={outOfStock}
            updateOutOfStock={updateOutOfStock}
            addToCartClicked={addToCartClicked}
          />
          <QuantitySelector
            styles={styles}
            selectedStyleIndex={selectedStyleIndex}
            sku={sku}
            sizeSelected={sizeSelected}
            quantitySelected={quantitySelected}
            updateQuantitySelected={updateQuantitySelected}
          />
        </div>
      </ErrorBoundary>
    );
  }
};

AddToCart.propTypes = {
  selectedStyleIndex: PropTypes.number,
  styles: statePropTypes.stylesPropTypes,
  handleAddCart: PropTypes.func,
  sku: PropTypes.string,
  sizeSelected: PropTypes.string,
  quantitySelected: PropTypes.number,
  outOfStock: PropTypes.bool,
  updateSizeSelectedAndSku: PropTypes.func,
  updateQuantitySelected: PropTypes.func,
  updateOutOfStock: PropTypes.func,
  addToCartClicked: PropTypes.bool
};

export default AddToCart;

