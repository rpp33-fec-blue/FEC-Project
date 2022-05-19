import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import DefaultView from './DefaultView.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

class ImageGallery extends React.Component {

  // Props: styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex

  constructor(props) {
    super(props);
    this.state = {
      defaultView: true
    };
  }

  render() {
    if (this.state.defaultView) {
      return (
        <ErrorBoundary component={'ImageGallery'}>
          <div className='image-gallery-component'>
            <DefaultView
              styles={this.props.styles}
              selectedStyleIndex={this.props.selectedStyleIndex}
              selectedImageIndex={this.props.selectedImageIndex}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
            />
          </div>
        </ErrorBoundary>
      );
    }
  }
};

ImageGallery.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedStyleIndex: PropTypes.number,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func
};

export default ImageGallery;