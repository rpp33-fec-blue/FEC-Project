import React from 'react';
import ProductsListContainer from '../../containers/relatedProductsListContainer.js';
import OutfitContainer from '../../containers/relatedProductsOutfitContainer.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='related-products-holder item-widget-related-products'>
        <div>RELATED PRODUCTS</div>
        <ProductsListContainer />
        <div>YOUR OUTFIT</div>
        <OutfitContainer />
      </div>
    );
  }
}

export default RelatedProducts;