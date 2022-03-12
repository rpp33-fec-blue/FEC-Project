import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import _ from 'underscore';
import ErrorBoundary from '../ErrorBoundary.jsx';

const QuantitySelector = ({ styles, selectedStyleIndex, sku, sizeSelected, quantitySelected, updateQuantitySelected }) => {

  if (sku === null) {
    return (
      <ErrorBoundary component={'QuantitySelector'}>
        <div className='quantitySelector-component'>
          <select className='quantity-selector' disabled>
            <option value='-'>-</option>
          </select>
        </div>
      </ErrorBoundary>
    );
  } else {

    var skusAvailable = styles.results[selectedStyleIndex].skus[sku].quantity;
    if (skusAvailable > 15) {
      skusAvailable = 15;
    }
    const validSkuQuantities = [];
    var validSkuQuantity = 1;
    while (validSkuQuantity <= skusAvailable) {
      validSkuQuantities.push(validSkuQuantity);
      validSkuQuantity += 1;
    }

    return (
      <ErrorBoundary component={'QuantitySelector'}>
        <div className='quantitySelector-component'>
          <select className='quantity-selector' onChange={updateQuantitySelected}>
            {_.map(validSkuQuantities, (quantity, index) => <option value={quantity} key={index}>{quantity}</option>)}
          </select>
        </div>
      </ErrorBoundary>
    );
  }
};

QuantitySelector.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  sku: PropTypes.string,
  sizeSelected: PropTypes.string,
  quantitySelected: PropTypes.string,
  updateQuantitySelected: PropTypes.func
};

export default QuantitySelector;