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
    this.rebuildRelatedItems = false;
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
      for ( var call = 0; call < results.length; call+=3 ) {
        var product = Object.assign( results[ call ].data.data, results[ call + 1 ].data.data );
        for ( var style = 0; style < results[ call + 2 ].data.data.results.length; style++ ) {
          if ( results[ call + 2 ].data.data.results[ style ]['default?'] ) {
            product = Object.assign( product, { styles: results[ call + 2 ].data.data.results[ style ] } );
            break;
          }
        }
        relatedProductsArray.push( product );
      }

      this.rebuildRelatedItems = false;
      this.setState({
        items: relatedProductsArray,
        isReady: true
      });
    });
  }

  compareProduct( productIndex ) {
    console.log('compare:', productIndex );
  }

  render() {
    var display = <div></div>

    if ( this.rebuildRelatedItems ) {
      this.buildRelatedItemsData();
      return display;
    } else {
      if ( this.state.isReady ) {
        this.rebuildRelatedItems = true;
        display = (
          <div className='card-list'>
            {this.state.items.map( ( item ) => {
              return (
                <ProductCard item={ item } changeProduct={this.props.changeProduct} compareProduct={this.compareProduct.bind( this )}/>
              )
            })}
          </div>
        );
      }

      return display;
    }
  }
}

export default ProductList;