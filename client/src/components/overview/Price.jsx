import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const Price = ( { styles, selectedStyleIndex } ) => {

  const price = Number(styles.results[selectedStyleIndex].original_price);
  var salePrice = styles.results[selectedStyleIndex].sale_price;
  if (salePrice !== null) {
    salePrice = Number(salePrice);
  }

  if (salePrice === null || salePrice === 0) {
    return (
      <ErrorBoundary component={'Price'}>
      <div className='price-component'>
        <p className='overview-text'>Price: ${price}</p>
      </div>
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary component={'Price'}>
      <div className='price-component overview-text'>
        <p><span className='overview-text'>Price:</span> <span className="overview-text">${salePrice}</span> <span>--></span> <span className="red-text">${price}</span></p>
      </div>
      </ErrorBoundary>
    );
  }
};

Price.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number
};

export default Price;