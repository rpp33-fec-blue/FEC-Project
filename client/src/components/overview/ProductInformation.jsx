import React from 'react';
import Rating from './Rating.jsx';
import ProductOverview from './ProductOverview.jsx';
import Price from './Price.jsx';
import OutfitToggle from './OutfitToggle.jsx';

class ProductInformation extends React.Component {

  // Props: productId, metadata, productInfo, styles, selectedStyleIndex, outfit, handleAddOutfit, handleRemoveOutfit

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Rating metadata={this.props.metadata} />
        <h2>Name: {this.props.productInfo.name}</h2>
        <h4>Category: {this.props.productInfo.category}</h4>
        <ProductOverview productInfo={this.props.productInfo} />
        <Price styles={this.props.styles} selectedStyleIndex={this.props.selectedStyleIndex} />
        <OutfitToggle
          productId={this.props.productId}
          outfit={this.props.outfit}
          handleAddOutfit={this.props.handleAddOutfit}
          handleRemoveOutfit={this.props.handleRemoveOutfit}
        />
    </div>
    );
  }

};

export default ProductInformation;