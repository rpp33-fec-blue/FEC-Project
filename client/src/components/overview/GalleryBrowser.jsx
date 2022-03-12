import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import GalleryThumbnail from './GalleryThumbnail.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

const GalleryBrowser = ({ styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex, updateDefaultView }) => {

  const images = styles.results[selectedStyleIndex].photos;



  const scrollDown = (event) => {
    var thumbnails = $('.gallery-thumbnail-component');
    var top = thumbnails.css('top');
    var topNumber = Number(top.slice(0, top.indexOf('p')));
    topNumber -= 20;
    thumbnails.css('top', topNumber.toString() + 'px');
  };



  const scrollUp = (event) => {
    var thumbnails = $('.gallery-thumbnail-component');
    var top = thumbnails.css('top');
    var topNumber = Number(top.slice(0, top.indexOf('p')));
    topNumber += 20;
    thumbnails.css('top', topNumber.toString() + 'px');
  };

  return (
    <ErrorBoundary component={'GalleryBrowser'}>
      <span className='up-arrow' onMouseDown={scrollUp}>&#8593;</span>
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
      <span className='down-arrow' onMouseDown={scrollDown}>&#8595;</span>
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