import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import GalleryThumbnail from './GalleryThumbnail.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

const GalleryBrowser = ({ styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex, updateDefaultView }) => {

  const images = styles.results[selectedStyleIndex].photos;

  return (
    <ErrorBoundary component={'GalleryBrowser'}>
      <div className='gallery-browser-component'>
        {images.map((image, index) => (
          <GalleryThumbnail
            styles={styles}
            index={index}
            selectedStyleIndex={selectedStyleIndex}
            selectedImageIndex={selectedImageIndex}
            updateSelectedImageIndex={updateSelectedImageIndex}
            updateDefaultView={updateDefaultView}
            key={index}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};

GalleryBrowser.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func,
  updateDefaultView: PropTypes.func
};

export default GalleryBrowser;