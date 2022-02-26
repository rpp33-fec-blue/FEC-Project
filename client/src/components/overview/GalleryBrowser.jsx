import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const GalleryBrowser = ( { styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex, updateDefaultView } ) => {

  const images = styles.results[selectedStyleIndex].photos;

  {/* TO DO - limit to 7 thumbnails, and insert up and down arrows if more than 7 thumbnails */}
  return (
    <ErrorBoundary component={'GalleryBrowser'}>
    <div className='gallery-browser-component'>
      {images.map((image, index) => index === selectedImageIndex ? // TO DO - image should be highlighted
        <img src={image.thumbnail_url} className='gallery-thumbnail' onClick={updateDefaultView} key={index++}></img> :
        <img src={image.thumbnail_url} className='gallery-thumbnail' onClick={updateSelectedImageIndex} value={index} key={index++}></img>
      )}
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