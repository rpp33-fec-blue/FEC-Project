import React from 'react';
import ProductList from './productList.jsx';
import OutfitList from './outfitList.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  changeProduct( productId ) {
    this.props.handleSwitchProduct( productId );
  }

  addToOutfit() {
    this.props.handleAddOutfit( this.props.productId );
  }

  render() {
    return (
      <div className='item-widget-related-item'>
        <div>RELATED PRODUCTS</div>
        <ProductList relatedProducts={this.props.relatedProducts} changeProduct={this.changeProduct.bind( this )}/>
        <div>YOUR OUTFIT</div>
        <OutfitList outfit={this.props.outfit} changeProduct={this.changeProduct.bind( this )} addToOutfit={this.addToOutfit.bind( this)}/>
      </div>
    );
  }
}

export default RelatedItems;