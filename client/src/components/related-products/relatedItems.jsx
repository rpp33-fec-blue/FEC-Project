import React from 'react';
import ProductsListContainer from './containers/relatedProductsListContainer.js';
import OutfitContainer from './containers/relatedProductsOutfitContainer.js';

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

  removeFromOutfit( productId ) {
    this.props.handleRemoveOutfit( productId );
  }

  render() {
    return (
      <div className='item-widget-related-item'>
        <div>RELATED PRODUCTS</div>
        <ProductsListContainer />
        <div>YOUR OUTFIT</div>
        <OutfitContainer />
      </div>
    );
  }
}

export default RelatedItems;