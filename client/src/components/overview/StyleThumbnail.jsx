import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const StyleThumbnail = ({ styles, index, selectedStyleIndex, updateSelectedStyle }) => {

  const style = styles.results[index];
  const selectedStyleName = styles.results[selectedStyleIndex].name;

  var src = style.photos[0].thumbnail_url;
  var srcSmaller = src.slice(0, -8) + '100&q=50';

  if (index === selectedStyleIndex) {
    return (
      <ErrorBoundary component={'StyleThumbnail'}>
        <div className='style-thumbnail-container'>
          <img src={srcSmaller} className='style-thumbnail' alt='thumbnail of selected style'></img>
          <span className='style-checkmark' alt='checkmark'>&#10003;</span>
        </div>
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary component={'StyleThumbnail'}>
        <div className='style-thumbnail-container'>
          <img src={srcSmaller} className='style-thumbnail' onClick={updateSelectedStyle} index={index} alt='thumbnail of style not selected'></img>
        </div>
      </ErrorBoundary>
    );
  }
};

StyleThumbnail.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  index: PropTypes.number,
  selectedStyleIndex: PropTypes.number,
  updateSelectedStyle: PropTypes.func
};

export default StyleThumbnail;