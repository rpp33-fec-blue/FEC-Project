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
  addToCart,
  updateOutOfStock
}) => {

  return (
    <ErrorBoundary component={'AddToCart'}>
      <div className='addToCart-component'>
        <h2>AddToCart</h2>
        <SizeSelector
          styles={styles}
          selectedStyleIndex={selectedStyleIndex}
          sizeSelected={sizeSelected}
          updateSizeSelectedAndSku={updateSizeSelectedAndSku}
          outOfStock={outOfStock}
          updateOutOfStock={updateOutOfStock}
        />
        <QuantitySelector
          styles={styles}
          selectedStyleIndex={selectedStyleIndex}
          sku={sku}
          sizeSelected={sizeSelected}
          quantitySelected={quantitySelected}
          updateQuantitySelected={updateQuantitySelected}
        />
        <AddToCartButton
          outOfStock={outOfStock}
          sizeSelected={sizeSelected}
          addToCart={addToCart}
        />
      </div>
    </ErrorBoundary>
  );
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
  addToCart: PropTypes.func,
  updateOutOfStock: PropTypes.func
};

export default AddToCart;

