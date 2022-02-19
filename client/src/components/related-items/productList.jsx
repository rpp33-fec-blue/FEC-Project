import React from 'react';
import ProductCard from './productCard.jsx';
import Comparison from './comparison.jsx'
import _ from 'underscore';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isPopupVisible: false
    }
    this.isReady = false;
    this.throttledBuildItems = _.throttle( this.buildRelatedItemsData, 100 );
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

      this.isReady = true;
      this.setState({
        items: relatedProductsArray
      });
    });
  }

  compareProduct( productIndex ) {
    this.toggleCompare();
  }

  toggleCompare() {
    var toggle = ( this.state.isPopupVisible ) ? false : true;
    this.setState({
      isPopupVisible: toggle
    });
  }

  changeProduct( productId ) {
    this.isReady = false;
    this.props.changeProduct( productId );
  }

  render() {

    if ( !this.isReady ) {
      this.throttledBuildItems();
      return null;
    }

    return (
      <div>
        <Comparison visible={this.state.isPopupVisible} toggle={this.toggleCompare.bind( this )}/>
        <div className='card-list'>
          {this.state.items.map( ( item ) => {
            return (
              <ProductCard key={item.id} item={ item } changeProduct={this.changeProduct.bind( this )} actionButton={this.compareProduct.bind( this )} isOutfit={false}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;