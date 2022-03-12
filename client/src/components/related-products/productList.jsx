import React from 'react';
import ProductCard from './productCard.jsx';
import Comparison from './comparison.jsx';
import LoadingCard from './loadingCard.jsx';
import _ from 'underscore';
import $ from 'jquery';

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

    var uniqueProducts = [...new Set(this.props.relatedProducts)];
    var productIdIndex = uniqueProducts.indexOf(this.props.productId);
    if (productIdIndex > -1) {
      uniqueProducts.splice(productIdIndex, 1);
    }

    axios.get('/relatedProducts', {params: {related: JSON.stringify(uniqueProducts)}})
    .then((results) => {
      var relatedProductsArray = [];
      for ( var call = 0; call < results.data.data.length; call+=3 ) {
        var product = Object.assign( results.data.data[ call ], results.data.data[ call + 1 ] );
        var defaultFound = false;
        for ( var style = 0; style < results.data.data[ call + 2 ].results.length; style++ ) {
          if ( results.data.data[ call + 2 ].results[ style ]['default?'] ) {
            product = Object.assign( product, { styles: results.data.data[ call + 2 ].results[ style ] } );
            defaultFound = true;
            break;
          }
        }

        if ( !defaultFound ) {
          product = Object.assign( product, { styles: results.data.data[ call + 2 ].results[ 0 ] } );
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
    this.changeUrl(productId);
    this.props.handleSwitchProduct( productId );
  }

  scrollRight() {
    var count = 0;
    var productList = document.getElementById('related-product-list');
    $('.card-fade-left').removeClass('card-no-arrow');
    if (productList.offsetWidth + productList.scrollLeft < productList.scrollWidth) {
      var scroll = setInterval(() => {
        if (count < 220 && (productList.offsetWidth + productList.scrollLeft) < productList.scrollWidth) {
          productList.scrollLeft += 2
          count += 2;
        } else {

          $('.card-fade-left').show(0);

          if (productList.offsetWidth + productList.scrollLeft >= productList.scrollWidth) {
            $('.card-fade-right').hide(0);
          }

          clearInterval(scroll);
        }
      }, 1)
    } else {
      $('.card-fade-left').show(0);
      $('.card-fade-right').hide(0);
      console.log('reached the end');
    }
  }

  scrollLeft() {
    var count = 0;
    var productList = document.getElementById('related-product-list');
    if (productList.scrollLeft > 0) {
      var scroll = setInterval(() => {
        if (count < 220 && productList.scrollLeft > 0) {
          productList.scrollLeft -= 2
          count += 2;
        } else {
          $('.card-fade-right').show(0);
          if (productList.scrollLeft === 0) {
            $('.card-fade-left').hide(0);
          }
          clearInterval(scroll);
        }
      }, 1)
    } else {
      $('.card-fade-left').hide(0);
      $('.card-fade-right').show(0);
      console.log('reached the end!')
    }
  }

  changeUrl (productId) {
    var productName = this.props.productInfo.name;
    var url = `/product/${productId}/${productName}`;
    window.location.href = url;
  }

  render() {

    if (!this.isReady || this.productId !== this.props.productId) {
      this.buildRelatedItemsData();
      return (
        <LoadingCard />
      )
    }

    var productCards = this.state.items.map( ( item, index ) => {
      return (
        <ProductCard key={item.id} item={item} index={index} changeProduct={this.changeProduct} actionButton={this.compareProduct} isOutfit={false}/>
      )
    });

    var leftFade = <div className='card-fade-right' onClick={this.scrollRight}>&#x203A;</div>;
    if (this.state.items.length < 4) {
      leftFade = <div className='card-fade-right card-no-arrow' onClick={this.scrollRight}>&#x203A;</div>;
    }

    return (
      <React.Fragment>
        <Comparison visible={this.state.isPopupVisible} toggle={this.toggleCompare} currentProduct={this.props.productInfo} selectedProduct={this.state.selectedProduct}/>
        <div id='related-product-list' className='card-list-holder'>
          <div className='card-list'>
            <div className='card-fade-left card-no-arrow' onClick={this.scrollLeft}>&#x2039;</div>
            {productCards}
            {leftFade}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;