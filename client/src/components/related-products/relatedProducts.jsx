import React from 'react';
import ProductsListContainer from '../../containers/relatedProductsListContainer.js';
import OutfitContainer from '../../containers/relatedProductsOutfitContainer.js';
import postInteraction from '../../interactions.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.trackInteractions = this.trackInteractions.bind(this);
  }

  trackInteractions(event) {
    postInteraction(event, 'Related Products & Outfit');
  }

  render() {
    return (
      <div className='item-widget-related-products' onClick={this.trackInteractions}>
        <div className='related-products-headers'>RELATED PRODUCTS</div>
        <ProductsListContainer />
        <div className='related-products-headers'>YOUR OUTFIT</div>
        <OutfitContainer />
      </div>
    );
  }
}

export default RelatedProducts;