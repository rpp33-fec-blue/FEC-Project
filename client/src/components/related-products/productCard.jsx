import React from 'react';
import ReviewStars from '../reviewStars.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.cardClicked = this.cardClicked.bind(this);
    this.compareProduct = this.compareProduct.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  cardClicked() {
    this.props.changeProduct( this.props.item.id )
  }

  compareProduct() {
    this.props.actionButton( this.props.index );
  }

  removeFromOutfit() {
    this.props.actionButton( this.props.item.id );
  }

  render() {
    var photo = <div className='default-image-color' onClick={this.cardClicked}></div>
    if ( this.props.item.styles ) {
      var photoSource = this.props.item.styles.photos[0].thumbnail_url;
      if ( photoSource !== null ) {
       photo = <img className='card-info card-photo' src={photoSource} alt={'Photo of ' & this.props.item.name} loading="lazy" onClick={this.cardClicked}></img>
      }
    }

    var price = <div className='card-info card-price'>{'$' + Math.round(this.props.item.default_price)}</div>
    if (this.props.item.sale_price) {
      price = (
        <div>
          <div className='card-info card-price sale-price'>{'$' + Math.round(this.props.item.sale_price)}</div>
          <div className='card-info card-price original-price'>{'$' + Math.round(this.props.item.default_price)}</div>
        </div>
      )
    }

    var button = (
      <div onClick={this.compareProduct}>
        <div className='card-icon-star'>&#9734;</div>
      </div>
    )
    if ( this.props.isOutfit ) {
      button = (
        <div onClick={this.removeFromOutfit}>
          <div className='card-button'>&#8855;</div>
        </div>
      )
    }

    return (
      <div className='product-card'>
        <div className='related-image-container'>
          {photo}
          {button}
        </div>
        <div className='card-info-holder' onClick={this.cardClicked}>
          <div className='card-info-sub-holder'>
            <div className='card-info card-category'>{this.props.item.category}</div>
            <div className='card-info card-name'>{this.props.item.name}</div>
            {price}
          </div>
          <div className='card-review-stars'>
            <ReviewStars ratings={this.props.item.ratings}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;