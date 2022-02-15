import React from 'react';
import ProductList from './productList.jsx';
import OutfitList from './outfitList.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }
  //this.props.relatedProducts

  render() {
    return (
      <div className='item-widget-related-item'>
        <div>RELATED PRODUCTS</div>
        <ProductList relatedProducts={[ 64621, 64622, 64627, 64626 ]}/>
        <div>YOUR OUTFIT</div>
        <OutfitList outfit={this.props.outfit}/>
      </div>
    );
  }
}

export default RelatedItems;