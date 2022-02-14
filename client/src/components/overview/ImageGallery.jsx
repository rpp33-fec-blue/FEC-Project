import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';

class ImageGallery extends React.Component {

    // Props: styles, selectedStyleId, selectedImageIndex, updateSelectedImageIndex

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
      // If default view equals true
      if (this.state.defaultView) {
        return (
          <div>
            {/* <DefaultView
              styles={this.props.styles}
              selectedStyleId={this.props.selectedStyleId}
              selectedImageIndex={this.props.selectedImageIndex}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
              updateDefaultView={this.updateDefaultView}
            /> */}
          </div>
        );
      } else {
        return (
          <div>
            {/* <ExpandedView
              styles={this.props.styles}
              selectedStyleId={this.props.selectedStyleId}
              selectedImageIndex={this.props.selectedImageIndex}
              updateSelectedImageIndex={this.props.updateSelectedImageIndex}
              updateDefaultView={this.updateDefaultView}
            /> */}
          </div>
        );
      }
    }
};

export default ImageGallery;