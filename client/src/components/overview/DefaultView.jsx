import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import GalleryBrowser from './GalleryBrowser.jsx';
import ScrollArrow from './ScrollArrow.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

const DefaultView = ({ styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex, updateDefaultView }) => {

  const mainImageUrl = styles.results[selectedStyleIndex].photos[selectedImageIndex].url;
  const images = styles.results[selectedStyleIndex].photos;

  return (
    <ErrorBoundary component={'DefaultView'}>
      <div className='default-view-component'>
        <img src={mainImageUrl} className='main-image' ></img> {/* TO DO - On hover, cursor changes to magnifying glass; if clicked, should update defaultView */}
        <ScrollArrow
          styles={styles}
          selectedStyleIndex={selectedStyleIndex}
          selectedImageIndex={selectedImageIndex}
          updateSelectedImageIndex={updateSelectedImageIndex}
          direction={'left'}
        />
        <ScrollArrow
          styles={styles}
          selectedStyleIndex={selectedStyleIndex}
          selectedImageIndex={selectedImageIndex}
          updateSelectedImageIndex={updateSelectedImageIndex}
          direction={'right'}
        />
        <GalleryBrowser
          styles={styles}
          selectedStyleIndex={selectedStyleIndex}
          selectedImageIndex={selectedImageIndex}
          updateSelectedImageIndex={updateSelectedImageIndex}
          updateDefaultView={updateDefaultView}
        />
      </div>
    </ErrorBoundary>
  );
};

DefaultView.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func,
  updateDefaultView: PropTypes.func
};

export default DefaultView;