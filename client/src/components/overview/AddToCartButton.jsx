import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const AddToCartButton = ({ outOfStock, sizeSelected, addToCart }) => {

  if (outOfStock) {
    return (
      <ErrorBoundary component={'AddToCartButton'}>
        <div className='addToCartButton-component'>
          <button hidden disabled>Add To Cart</button>
        </div>
      </ErrorBoundary>
    );
  } else if (sizeSelected === 'Select Size') {
    return (
      <ErrorBoundary component={'AddToCartButton'}>
        <div className='addToCartButton-component'>
          <button onClick={null}>Add To Cart</button> {/* TO DO - open size selector dropdown and display 'Please select size' above */}
        </div>
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary component={'AddToCartButton'}>
        <div className='addToCartButton-component'>
          <button onClick={addToCart} disabled>Add To Cart</button> {/* Can enable if we're comfortable POSTing to cart API */}
        </div>
      </ErrorBoundary>
    );
  }
};


AddToCartButton.propTypes = {
  outOfStock: PropTypes.bool,
  sizeSelected: PropTypes.string,
  addToCart: PropTypes.func
};

export default AddToCartButton;