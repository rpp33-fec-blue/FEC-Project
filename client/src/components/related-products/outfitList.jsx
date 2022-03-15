import React from 'react';
import ProductCard from './productCard.jsx';
import AddOutfitCard from './addOutfitCard.jsx';
import Scroll from './scroll.js';
import buildProductArray from './buildProductArray.js';
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
      var outfitArray = buildProductArray(results);

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
    var scroll = new Scroll.ScrollOutfitList();
    scroll.scrollRight();
  }

  scrollLeft() {
    var scroll = new Scroll.ScrollOutfitList();
    scroll.scrollLeft();
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