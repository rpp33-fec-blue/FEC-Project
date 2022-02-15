import React from 'react';
import ProductCard from './productCard.jsx';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isReady: false
    }
    this.buildRelatedItemsData();
  }

  buildRelatedItemsData() {
    var apiCalls = [];
    for ( var i = 0; i < this.props.relatedProducts.length; i++ ) {
      var productId = this.props.relatedProducts[i];
      apiCalls.push(axios.get( `http://localhost:8080/products/${productId}`, { params: { product_id: productId } } ));
      apiCalls.push(axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: productId } } ));
      apiCalls.push(axios.get( `http://localhost:8080/products/${productId}/styles`, { params: { product_id: productId } } ));
    }

    Promise.all(apiCalls).then( ( results ) => {
      var relatedProductsArray = [];
      for ( var i = 0; i < results.length; i+=3 ) {
        var product = Object.assign( results[ i ].data.data, results[ i + 1 ].data.data );
        for ( var j = 0; j < results[ i + 2 ].data.data.results.length; j++ ) {
          if ( results[ i + 2 ].data.data.results[ j ]['default?'] ) {
            product = Object.assign( product, { styles: results[ i + 2 ].data.data.results[ j ] } );
            break;
          }
        }
        relatedProductsArray.push( product );
      }

      this.setState({
        items: relatedProductsArray,
        isReady: true
      });
    });
  }


  render() {
    var display;
    if ( this.state.isReady ) {
      display = (
        <div className='card-list'>
          {this.state.items.map( ( item ) => {
            return (
              <ProductCard item={ item }/>
            )
          })}
        </div>
      );
    } else {
      display = <div></div>
    }

    return (
      display
    );
  }
}

export default ProductList;