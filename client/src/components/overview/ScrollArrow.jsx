import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const ScrollArrow = ({ styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex, direction }) => {

  const lastImageIndex = styles.results[selectedStyleIndex].photos.length - 1;

  if (direction === 'left') {
    if (selectedImageIndex === 0) {
      return null;
    } else {
      return (
        <ErrorBoundary component={'ScrollArrow'}>
          <div className='scroll-arrow-component'>
            <img src={'/assets/left-arrow.png'} className='left-scroll-arrow' onClick={updateSelectedImageIndex} value={direction} alt='left arrow'></img>
          </div>
        </ErrorBoundary>
      );
    }
    return;
  } else {
    if (selectedImageIndex === lastImageIndex) {
      return null;
    } else {
      return (
        <ErrorBoundary component={'ScrollArrow'}>
          <div className='scroll-arrow-component'>
            <img src={'/assets/right-arrow.png'} className='right-scroll-arrow' onClick={updateSelectedImageIndex} value={direction} alt='right arrow'></img>
          </div>
        </ErrorBoundary>
      );
    }
  }
};

ScrollArrow.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func,
  direction: PropTypes.string
};

export default ScrollArrow;