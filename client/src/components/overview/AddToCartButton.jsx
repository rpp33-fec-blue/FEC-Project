import React from 'react';

const AddToCartButton = ( { outOfStock, sizeSelected, addToCart } ) => {

  if (outOfStock) {
    return (
      <div className='addToCartButton-component'>
        <button hidden disabled>Add To Cart</button>
      </div>
    );
  } else if (sizeSelected === 'Select Size') {
    return (
      <div className='addToCartButton-component'>
        <button onClick={null}>Add To Cart</button> {/* TO DO - open size selector dropdown and display 'Please select size' above */}
      </div>
    );
  } else {
    return (
      <div className='addToCartButton-component'>
        <button onClick={addToCart} disabled>Add To Cart</button> {/* Can enable if we're comfortable POSTing to cart API */}
      </div>
    );
  }
};

export default AddToCartButton;