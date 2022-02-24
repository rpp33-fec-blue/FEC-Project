import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

class ImageGallery extends React.Component {

    // Props: styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex

    constructor(props) {
      super(props);
      this.state = {
        defaultView: true
      };
      this.updateDefaultView = this.updateDefaultView.bind(this);
    }

    updateDefaultView(event) {
      // TO DO
    }

    render() {
      if (this.state.defaultView) {
        return (
          <ErrorBoundary component={'ImageGallery'}>
          <div className='imageGallery-component'>
            <h2>ImageGallery</h2>
            <DefaultView
              styles={this.props.styles}
              selectedStyleIndex={this.props.selectedStyleIndex}
              selectedImageIndex={this.props.selectedImageIndex}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
              updateDefaultView={this.updateDefaultView}
            />
          </div>
          </ErrorBoundary>
        );
      } else {
        return (
          <ErrorBoundary component={'ImageGallery'}>
          <div className='imageGallery-component'>
            <h2>ImageGallery</h2>
            {/* <ExpandedView
              styles={this.props.styles}
              selectedStyleId={this.props.selectedStyleId}
              selectedImageIndex={this.props.selectedImageIndex}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
              updateDefaultView={this.updateDefaultView}
            /> */}
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