import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';

const StyleSelector = ( { styles, selectedStyleIndex, updateSelectedStyle } ) => {

  const selectedStyleName = styles.results[selectedStyleIndex].name;

  // TO DO - 4 thumbnails per row
  // TO DO - add checkmark to selected style

  return (
    <div className='styleSelector-component'>
      <h2>Style Selector</h2>
      <p>Selected style: {selectedStyleName}</p>
      {styles.results.map((style, index) =>  index === selectedStyleIndex ?
        <img src={style.photos[0].thumbnail_url} className='style-thumbnail' id='selectedStyle' key={index}></img> :
        <img src={style.photos[0].thumbnail_url} className='style-thumbnail' onClick={updateSelectedStyle} index={index} key={index}></img>
      )}
   </div>
  );
};

StyleSelector.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  updateSelectedStyle: PropTypes.func
};

export default StyleSelector;