import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';

const GalleryIcon = ( { styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex } ) => {

  // Props: styles, selectedImageId, selectedImageIndex, updateSelectedImage

  return (
    <div className='galleryIcon-component'>
      {/* TO DO - return icons */}
    </div>
  );

};

GalleryIcon.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func
};

export default GalleryIcon;