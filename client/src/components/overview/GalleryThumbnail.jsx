import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const GalleryThumbnail = ({ styles, index, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex, updateDefaultView }) => {

  const images = styles.results[selectedStyleIndex].photos;

  if (index === selectedImageIndex) {
    return (
      <ErrorBoundary component={'GalleryThumbnail'}>
        <div className='gallery-thumbnail-component'>
          <img src={images[index].thumbnail_url} className='gallery-thumbnail' alt='thumbnail of main image'></img>
          <span className='horizontal-bar' alt='horizontal bar'>&#95;</span>
        </div>
      </ErrorBoundary>
    );
  } else {
    return (
    <ErrorBoundary component={'GalleryThumbnail'}>
      <div className='gallery-thumbnail-component'>
        <img src={images[index].thumbnail_url} className='gallery-thumbnail' onClick={updateSelectedImageIndex} value={index} alt='thumbnail of other image'></img>
      </div>
    </ErrorBoundary>
    );
  }
};

GalleryThumbnail.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  index: PropTypes.number,
  selectedStyleIndex: PropTypes.number,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func,
  updateDefaultView: PropTypes.func
};

export default GalleryThumbnail;