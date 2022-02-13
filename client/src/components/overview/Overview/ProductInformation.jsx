import React from 'react';
import Rating from './Rating.jsx';
import ProductOverview from './ProductOverview.jsx';
import Price from './Price.jsx';
import OutfitToggle from './OutfitToggle.jsx';

class ProductInformation extends React.Component {

  // Props: metadata, productInfo, styles, selectedStyleId, selectedStyleIndex, outfit

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Rating metadata={this.props.metadata} />
        <h2>{productInfo.name}</h2>
        <h4>{productInfo.category}</h4>
        <ProductOverview productInfo={this.props.productInfo} />
        <Price styles={this.props.styles} selectedStyleId={this.props.selectedStyleId} />
        <OutfitToggle selectedStyleId={this.props.selectedStyleId} outfit={this.props.outfit} />
    </div>
    );
  }

};

export default ProductInformation;









/*
const ProductInformation = ({ metadata, productInfo, selectedStyle, inOutfit, addOutfit, removeOutfit }) => {
  return (
    <div>
      <Rating metadata={metadata} />
      <h2>{productInfo.name}</h2>
      <h4>{productInfo.category}</h4>
      <ProductOverview productInfo={productInfo} />
      <Price selectedStyle={selectedStyle} />
      <OutfitToggle inOutfit={inOutfit} addOutfit={addOutfit} removeOutfit={removeOutfit} />
    </div>
  );
}

export default ProductInformation;

*/