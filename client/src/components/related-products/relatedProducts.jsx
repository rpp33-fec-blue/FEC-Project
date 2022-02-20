import React from 'react';
import ProductsListContainer from '../../containers/relatedProductsListContainer.js';
import OutfitContainer from '../../containers/relatedProductsOutfitContainer.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item-widget-related-products'>
        <div className='related-products-headers'>RELATED PRODUCTS</div>
        <ProductsListContainer />
        <div className='related-products-headers'>YOUR OUTFIT</div>
        <OutfitContainer />
      </div>
    );
  }
}

export default RelatedProducts;