import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

const StyleSelector = ({ styles, selectedStyleIndex, updateSelectedStyle }) => {

  const selectedStyleName = styles.results[selectedStyleIndex].name;

  // TO DO - 4 thumbnails per row
  // TO DO - add checkmark to selected style

  return (
    <ErrorBoundary component={'StyleSelector'}>
      <p>STYLE > {selectedStyleName}</p>
      <div className='styleSelector-component'>
        {styles.results.map((style, index) => index === selectedStyleIndex ?
          <img src={style.photos[0].thumbnail_url} className='style-thumbnail' id='selectedStyle' key={index}></img> :
          <img src={style.photos[0].thumbnail_url} className='style-thumbnail' onClick={updateSelectedStyle} index={index} key={index}></img>
        )}
      </div>
    </ErrorBoundary>
  );
};

StyleSelector.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  updateSelectedStyle: PropTypes.func
};

export default StyleSelector;