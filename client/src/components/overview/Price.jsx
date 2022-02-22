import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';

const Price = ( { styles, selectedStyleIndex } ) => {

  const price = Number(styles.results[selectedStyleIndex].original_price);
  var salePrice = styles.results[selectedStyleIndex].sale_price;
  if (salePrice !== null) {
    salePrice = Number(salePrice);
  }

  if (salePrice === null || salePrice === 0) {
    return (
      <div className='price-component'>
        <p>Price: ${price}</p>
      </div>
    );
  } else {
    return (
      <div className='price-component'>
        <p><span id="price">Price: ${salePrice} --> </span><span id="salePrice">${price}</span></p>
      </div>
    );
  }
};

Price.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number
};

export default Price;