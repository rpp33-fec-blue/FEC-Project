import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const AddToCartButton = ({ outOfStock, sizeSelected, addToCart, updateAddToCartClicked }) => {

  if (outOfStock) {
    return (
      <ErrorBoundary component={'AddToCartButton'}>
        <div className='addToCartButton-component'>
          <button className='add-to-cart-button overview-text' hidden disabled>ADD TO BAG</button>
        </div>
      </ErrorBoundary>
    );
  } else if (sizeSelected === 'Select Size') {
    return (
      <ErrorBoundary component={'AddToCartButton'}>
        <div className='addToCartButton-component'>
          <button className='add-to-cart-button overview-text' onClick={updateAddToCartClicked}>ADD TO BAG</button>
        </div>
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary component={'AddToCartButton'}>
        <div className='addToCartButton-component'>
          <button className='add-to-cart-button overview-text' onClick={addToCart}>ADD TO BAG</button>
        </div>
      </ErrorBoundary>
    );
  }
};

AddToCartButton.propTypes = {
  outOfStock: PropTypes.bool,
  sizeSelected: PropTypes.string,
  addToCart: PropTypes.func,
  updateAddToCartClicked: PropTypes.func
};

export default AddToCartButton;