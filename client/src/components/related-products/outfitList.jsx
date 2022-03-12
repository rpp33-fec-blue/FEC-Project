import React from 'react';
import ProductCard from './productCard.jsx';
import AddOutfitCard from './addOutfitCard.jsx';
import $ from 'jquery';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.isReady = false;
    this.changeProduct = this.changeProduct.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  buildOutfitList() {

    if (this.props.outfit.lenght === this.state.items.length) {
      this.isReady = true;
      this.setState({
        items: outfitArray
      });
    }

    axios.get('/relatedProducts', {params: {related: JSON.stringify(this.props.outfit)}})
    .then((results) => {
      var outfitArray = [];
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

        outfitArray.push( product );
      }

      this.isReady = true;
      this.setState({
        items: outfitArray
      });
    });
  }

  changeProduct(productId) {
    this.props.handleSwitchProduct(productId);
  }

  addToOutfit() {
    $('.card-fade-right-outfit').show(0);
    this.props.handleAddOutfit(this.props.productId);
  }

  removeFromOutfit(productId) {
    this.props.handleRemoveOutfit(productId);
  }

  scrollRight() {
    console.log('scroll right');
    var count = 0;
    var productList = document.getElementById('outfit-product-list');
    $('.card-fade-left-outfit').removeClass('card-no-arrow');
    if (productList.offsetWidth + productList.scrollLeft < productList.scrollWidth) {
      var scroll = setInterval(() => {
        if (count < 220 && (productList.offsetWidth + productList.scrollLeft) < productList.scrollWidth) {
          productList.scrollLeft += 2;
          count += 2;
        } else {
          $('.card-fade-left-outfit').show(0);
          if (productList.offsetWidth + productList.scrollLeft >= productList.scrollWidth) {
            $('.card-fade-right-outfit').hide(0);
          }

          clearInterval(scroll);
        }
      }, 1)
    } else {
      $('.card-fade-left-outfit').show(0);
      $('.card-fade-right-outfit').hide(0);
      console.log('reached the end');
    }
  }

  scrollLeft() {
    console.log('scroll left');
    var count = 0;
    var productList = document.getElementById('outfit-product-list');
    if (productList.scrollLeft > 0) {
      var scroll = setInterval(() => {
        if (count < 220 && productList.scrollLeft > 0) {
          productList.scrollLeft -= 2;
          count += 2;
        } else {
          $('.card-fade-right-outfit').show(0);
          if (productList.scrollLeft === 0) {
            $('.card-fade-left-outfit').hide(0);
          }
          clearInterval(scroll);
        }
      }, 1)
    } else {
      $('.card-fade-left-outfit').hide(0);
      $('.card-fade-right-outfit').show(0);
      console.log('reached the end!')
    }
  }

  render() {

    if (!this.isReady) {
      this.buildOutfitList();
      return null;
    }

    this.isReady = false;

    var productCards = this.state.items.map((item) => {
      return (
        <ProductCard key={item.id} item={item} changeProduct={this.changeProduct} actionButton={this.removeFromOutfit} isOutfit={true}/>
      );
    });

    var leftFade = <div className='card-fade-right-outfit' onClick={this.scrollRight}>&#x203A;</div>;
    if (this.state.items.length < 3) {
      leftFade = <div className='card-fade-right-outfit card-no-arrow' onClick={this.scrollRight}>&#x203A;</div>;
    }

    return (
      <div id='outfit-product-list' className='card-list-holder'>
        <div className='card-list'>
          <div className='card-fade-left-outfit card-no-arrow' onClick={this.scrollLeft}>&#x2039;</div>
          <AddOutfitCard addToOutfit={this.addToOutfit}/>
          {productCards}
          {leftFade}
        </div>
      </div>
    );
  }
}

export default OutfitList;