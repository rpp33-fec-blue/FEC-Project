import React from 'react';
import ProductList from './productList.jsx';
import OutfitList from './outfitList.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='item-widget-related-item'>
        <div>RELATED PRODUCTS</div>
        <ProductList relatedItems={this.props.relatedProducts}/>
        <div>YOUR OUTFIT</div>
        <OutfitList outfit={this.props.outfit}/>
      </div>
    );
  }
}

export default RelatedItems;