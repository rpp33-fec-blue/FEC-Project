import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageSelector.jsx';
import AddToCart from './AddToCart.jsx';

class Overview extends React.Component {

  // Props: productId, metadata, productInfo, styles, cart, outfit

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
          selectedStyleId={this.state.selectedStyleId}
          selectedStyleIndex={this.state.selectedStyleIndex}
          outfit={this.props.outfit}
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




/*

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      selectedStyleIndex: 0,
      selectedStyleId: this.props.styles.results[selectedStyleIndex].style_id,
      selectedStyle: this.props.styles[selectedStyleIndex],
      inOutfit: false,
      expandedView: false
    };
    this.updateSelectedStyle = this.updateSelectedStyle.bind(this);
  }

  updateSelectedStyle(event) {
    const htmlAttributes = event.serializeArray();
    const selectedStyleId; // TO DO
    var selectedStyleIndex;
    const styles = this.state.styles.results;
    for (var index = 0; index < styles; index++) {
      if (styles[index].style_id === selectedStyleId) {
        selectedStyleIndex = index;
      }
    }
    });
    this.setState({
      selectedStyleIndex: selectedStyleIndex,
      selectedStyleId: selectedStyleId,
      selectedStyle: this.state.styles[selectedStyleIndex],
    });
  }

  render() {
    return (
      <ProductInformation metadata={this.props.metadata} productInfo={this.props.productInfo} addOutfit={this.props.addOutfit} removeOutfit={this.props.removeOutfit} selectedStyle={this.state.selectedStyle} inOutfit={this.state.inOutfit} />
      <StyleSelector styles={this.state.styles} selectedStyleIndex={this.state.selectedStyleIndex} selectedStyleId={this.state.selectedStyleId} updateSelectedStyle={updateSelectedStyle} />
      <ImageGallery style={this.state.selectedStyle} expandedView={this.state.expandedView} />
      <AddToCart selectedStyle={this.state.selectedStyle} addCart={this.props.addCart} />
    );
  }
}

export default Overview;

*/










