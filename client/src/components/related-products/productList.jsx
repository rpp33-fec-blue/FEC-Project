import React from 'react';
import ProductCard from './productCard.jsx';
import Comparison from './comparison.jsx'
import _ from 'underscore';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isPopupVisible: false,
      selectedProduct: { features: [] }
    }
    this.isReady = false;
    this.productId = null;
    this.throttledBuildItems = _.throttle( this.buildRelatedItemsData, 100 );
    this.changeProduct = this.changeProduct.bind(this);
    this.compareProduct = this.compareProduct.bind(this);
    this.toggleCompare = this.toggleCompare.bind(this);
  }

  buildRelatedItemsData() {
    var apiCalls = [];
    var uniqueProducts = [...new Set(this.props.relatedProducts)];
    for ( var i = 0; i < uniqueProducts.length; i++ ) {
      var productId = uniqueProducts[i];
      apiCalls.push(axios.get( `http://localhost:8080/products/${productId}`, { params: { product_id: productId } } ));
      apiCalls.push(axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: productId } } ));
      apiCalls.push(axios.get( `http://localhost:8080/products/${productId}/styles`, { params: { product_id: productId } } ));
    }

    Promise.all(apiCalls).then( ( results ) => {
      var relatedProductsArray = [];
      for ( var call = 0; call < results.length; call+=3 ) {
        var product = Object.assign( results[ call ].data.data, results[ call + 1 ].data.data );
        var defaultFound = false;
        for ( var style = 0; style < results[ call + 2 ].data.data.results.length; style++ ) {
          if ( results[ call + 2 ].data.data.results[ style ]['default?'] ) {
            product = Object.assign( product, { styles: results[ call + 2 ].data.data.results[ style ] } );
            defaultFound = true;
            break;
          }
        }

        if ( !defaultFound ) {
          product = Object.assign( product, { styles: results[ call + 2 ].data.data.results[ 0 ] } );
        }

        relatedProductsArray.push( product );
      }

      this.isReady = true;
      this.productId = this.props.productId;
      this.setState({
        items: relatedProductsArray
      });
    });
  }

  toggleCompare() {
    var toggle = ( this.state.isPopupVisible ) ? false : true;
    this.setState({
      isPopupVisible: toggle
    });
  }

  compareProduct( productIndex ) {
    var toggle = ( this.state.isPopupVisible ) ? false : true;
    this.setState({
      isPopupVisible: toggle,
      selectedProduct: this.state.items[ productIndex ]
    });
  }

  changeProduct( productId ) {
    this.isReady = false;
    this.props.handleSwitchProduct( productId );
  }

  scrollRight() {
    console.log('scroll right');
    document.getElementById('related-product-list').scrollLeft += 250;
  }

  render() {

    if (!this.isReady || this.productId !== this.props.productId) {
      this.buildRelatedItemsData();
      return null;
    }

    var productCards = this.state.items.map( ( item, index ) => {
      return (
        <ProductCard key={item.id} item={item} index={index} changeProduct={this.changeProduct} actionButton={this.compareProduct} isOutfit={false}/>
      )
    });

    return (
      <React.Fragment>
        <Comparison visible={this.state.isPopupVisible} toggle={this.toggleCompare} currentProduct={this.props.productInfo} selectedProduct={this.state.selectedProduct}/>
        <div id='related-product-list' className='card-list-holder'>
          <div className='card-list'>
            {productCards}
            <div className='card-fade-right' onClick={this.scrollRight}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;