import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView';

class ImageGallery extends React.Component {

    constructor( props ) {
      super( props );
      this.state = {
        photos: this.props.style.photos,
        selectedImageIndex: 0
      };
      this.updateSelectedImageIndex = this.updateSelectedImageIndex.bind(this);
    }

    updateSelectedImageIndex(event) {
      const index = event.serializeArray(); // TO DO
      this.setState( { selectedImageIndex: index } );
    }

    render() {
      if (this.props.expandedView === false) {
        return <DefaultView photos={this.state.photos} selectedImageIndex={this.state.selectedImageIndex} updateSelectedImageIndex={this.updateSelectedImageIndex} />;
      } else {
        return <ExpandedView photos={this.state.photos} selectedImageIndex={this.state.selectedImageIndex} updateSelectedImageIndex={this.updateSelectedImageIndex} />;
      }
    }
};

export default ImageGallery;