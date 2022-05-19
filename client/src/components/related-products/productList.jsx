import React from 'react';
import ProductCard from './productCard.jsx';
import Comparison from './comparison.jsx';
import LoadingCard from './loadingCard.jsx';
import Scroll from './scroll.js';
import buildProductArray from './buildProductArray.js';
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
      var relatedProductsArray = buildProductArray(results);

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
    var scroll = new Scroll.ScrollProductList();
    scroll.scrollRight();
  }

  scrollLeft() {
    var scroll = new Scroll.ScrollProductList();
    scroll.scrollLeft();
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