import React from 'react';
import ProductCard from './productCard.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.relatedItems.map( ( item ) => {
          return (
            <ProductCard item={ item }/>
          )
        })}
      </div>
    );
  }
}

export default ProductList;