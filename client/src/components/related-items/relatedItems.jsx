import React from 'react';
import ProductList from './productList.jsx';
import OutfitList from './outfitList.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>RELATED PRODUCTS</div>
        <ProductList />
        <div>YOUR OUTFIT</div>
        <OutfitList />
      </div>
    );
  }
}

export default RelatedItems;