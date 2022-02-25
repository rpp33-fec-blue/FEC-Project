import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import _ from 'underscore'; // for testing
import ErrorBoundary from '../ErrorBoundary.jsx';

const SizeSelector = ({ styles, selectedStyleIndex, sizeSelected, updateSizeSelectedAndSku, outOfStock, updateOutOfStock }) => {

  const skus = styles.results[selectedStyleIndex].skus;

  if (outOfStock) {
    return (
      <ErrorBoundary component={'SizeSelector'}>
        <div className='sizeSelector-component'>
          <select disabled>
            <option value='OUT OF STOCK' selected>OUT OF STOCK</option>
          </select>
        </div>
      </ErrorBoundary>
    );
  } else if (sizeSelected === 'Select Size') {
    return (
      <ErrorBoundary component={'SizeSelector'}>
        <div className='sizeSelector-component'>
          <select onChange={updateSizeSelectedAndSku}>
            <option value='Select Size'>Select Size</option>
            {_.map(skus, (sku, key) => sku.quantity > 0 ? <option value={sku.size} key={key}>{sku.size}</option> : null)}
          </select>
        </div>
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary component={'SizeSelector'}>
        <div className='sizeSelector-component'>
          <select onChange={updateSizeSelectedAndSku}>
            {_.map(skus, (sku, key) => sku.quantity > 0 ? <option value={sku.size} key={key}>{sku.size}</option> : null)}
          </select>
        </div>
      </ErrorBoundary>
    );
  }
};

SizeSelector.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  sizeSelected: PropTypes.string,
  updateSizeSelectedAndSku: PropTypes.func,
  outOfStock: PropTypes.bool,
  updateOutOfStock: PropTypes.func
};

export default SizeSelector;