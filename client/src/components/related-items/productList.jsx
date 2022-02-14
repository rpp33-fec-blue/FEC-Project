import React from 'react';
import ProductCard from './productCard.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.buildRelatedItemsData();
    console.log('related:', this.props.relatedItems);
  }

  buildRelatedItemsData() {
    // call GET on the api for every item in the relatedItems array
    // build up an array of items that has all of the info from get requests
    //return this.props.relatedItems;
    return [1, 2, 3];
  }


  render() {
    return (
      <div className='card-list'>
        {this.items.map( ( item ) => {
          return (
            <ProductCard item={ item }/>
          )
        })}
      </div>
    );
  }
}

export default ProductList;