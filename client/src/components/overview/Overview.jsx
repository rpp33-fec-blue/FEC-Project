import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';

class Overview extends React.Component {

  // Props: productId, metadata, productInfo, styles, cart, outfit, handleAddCart, handleAddOutfit, handleRemoveOutfit

  constructor(props) {
    super(props);
    this.state = {
      selectedStyleId: null,
      selectedStyleIndex: 0,
      selectedImageIndex: 0
    };
    this.updateSelectedStyle = this.updateSelectedStyle.bind(this);
    this.updateSelectedImageIndex = this.updateSelectedImageIndex.bind(this);
  }

  updateSelectedStyle(event) {
    // TO DO
  }

  updateSelectedImageIndex(event) {
    // TO DO
  }

  render() {
    return (
      <div>
        <h2>Product Information</h2>
        <ProductInformation
          metadata={this.props.metadata}
          productInfo={this.props.productInfo}
          styles={this.props.styles}
          selectedStyleIndex={this.state.selectedStyleIndex}
          outfit={this.props.outfit}
          handleAddOutfit={this.props.handleAddOutfit}
          handleRemoveOutfit={this.props.handleRemoveOutfit}
        />
        <h2>Style Selector</h2>
        <StyleSelector
          styles={this.props.styles}
          selectedStyleId={this.state.selectedStyleId}
          selectedStyleIndex={this.state.selectedStyleIndex}
          updateSelectedStyle={this.updateSelectedStyle}
        />
        <h2>ImageGallery</h2>
        <ImageGallery
          styles={this.props.styles}
          selectedStyleId={this.state.selectedStyleId}
          selectedImageIndex={this.state.selectedImageIndex}
          updateSelectedImageIndex={this.updateSelectedImageIndex}
        />
        <h2>AddToCart</h2>
        <AddToCart
          styles={this.props.styles}
          selectedStyleId={this.state.selectedStyleId}
        />
      </div>
    );
  }
}

export default Overview;