import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import StyleThumbnail from './StyleThumbnail.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

const StyleSelector = ({ styles, selectedStyleIndex, updateSelectedStyle }) => {

  const selectedStyleName = styles.results[selectedStyleIndex].name;

  return (
    <ErrorBoundary component={'StyleSelector'}>
      <span className='l700-font bottom-20px'>STYLE > </span><span className='large-font bottom-20px'>{selectedStyleName.toUpperCase()}</span>
      <div className='styleSelector-component'>
        {styles.results.map((style, index) => <StyleThumbnail styles={styles} index={index} selectedStyleIndex={selectedStyleIndex} updateSelectedStyle={updateSelectedStyle} key={index} />)}
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