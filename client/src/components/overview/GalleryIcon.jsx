import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const GalleryIcon = ({ styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex }) => {

  // Props: styles, selectedImageId, selectedImageIndex, updateSelectedImage

  return (
    <ErrorBoundary component={'GalleryIcon'}>
      <div className='galleryIcon-component'>
        {/* TO DO - return icons */}
      </div>
    </ErrorBoundary>
  );

};

GalleryIcon.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func
};

export default GalleryIcon;