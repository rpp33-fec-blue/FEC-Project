import React from 'react';
import ProductCard from './productCard.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.buildRelatedItemsData();
    console.log('related:', this.props.relatedProducts);
  }

  buildRelatedItemsData() {
    // call GET on the api for every item in the relatedProducts array
    // build up an array of items that has all of the info from get requests
    //return this.props.relatedItems;
    var apiCalls = [];
    for ( var i = 0; i < this.props.relatedProducts.length; i++ ) {
      var productId = this.props.relatedProducts[i];
      results.push(axios.get( `http://localhost:8080/products/${productId}`, { params: { product_id: productId } } ));
      results.push(axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: productId } } ));
      results.push(axios.get( `http://localhost:8080/products/${productId}/styles`, { params: { product_id: productId } } ));
    }

    return Promise.all(apiCalls).then( ( results ) => {
      var relatedProductsArray = [];
      for ( var i = 0; i < results.length; i+=3 ) {
        var product = Object.assign( results[ i ], results[ i + 1 ], results[ i + 2 ] );
        relatedProductsArray.push( product );
      }

      console.log('relatedProductsArray:', relatedProductsArray);
      return relatedProductsArray;
    });
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