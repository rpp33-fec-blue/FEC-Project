import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import _ from 'underscore'; // for testing

const SizeSelector = ( { styles, selectedStyleIndex, sizeSelected, updateSizeSelectedAndSku, updateOutOfStock } ) => {

  const skus = styles.results[selectedStyleIndex].skus;

  var outOfStock = true;
  for (var sku in skus) {
    if (skus[sku].quantity > 0) {
      outOfStock = false;
    }
  }

  if (outOfStock) {
    updateOutOfStock();
    return (
      <div className='sizeSelector-component'>
        <select disabled>
          <option value='OUT OF STOCK' selected>OUT OF STOCK</option>
        </select>
      </div>
    );
  } else if (sizeSelected === 'Select Size') {
    return (
      <div className='sizeSelector-component'>
      <select onChange={updateSizeSelectedAndSku}>
        <option value='Select Size'>Select Size</option>
        {_.map(skus, (sku, key) => sku.quantity > 0 ? <option value={sku.size} key={key}>{sku.size}</option> : null )}
      </select>
    </div>
    );
  } else {
    return (
      <div className='sizeSelector-component'>
        <select onChange={updateSizeSelectedAndSku}>
          {_.map(skus, (sku, key) => sku.quantity > 0 ? <option value={sku.size} key={key}>{sku.size}</option> : null )}
        </select>
      </div>
    );
  }
};

SizeSelector.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  sizeSelected: PropTypes.string,
  updateSizeSelectedAndSku: PropTypes.func,
  updateOutOfStock: PropTypes.func
};

export default SizeSelector;