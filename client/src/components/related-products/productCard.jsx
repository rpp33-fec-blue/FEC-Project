import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
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
    var photo = null;
    if ( this.props.item.styles ) {
      photo = this.props.item.styles.photos[0].url
      if ( photo === null ) {
        photo = './assets/light-grey.jpg';
      }
    } else {
      photo = './assets/light-grey.jpg';
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
      <div onClick={this.compareProduct.bind( this )}>
        <img className='card-icon-star' src={'./assets/baseline_star_white.png'}></img>
        <img className='card-icon-star'  src={'./assets/baseline_star_outline_black.png'}></img>
      </div>
    )
    if ( this.props.isOutfit ) {
      button = (
        <div className='card-icon' onClick={this.removeFromOutfit.bind( this )}>
          <img className='card-button'  src={'./assets/close.png'}></img>
        </div>
      )
    }

    return (
      <div className='product-card'>
        <div className='related-image-container'>
          <img className='card-info card-photo' src={photo} onClick={this.cardClicked.bind( this )}></img>
          {button}
        </div>
        <div className='card-info-holder' onClick={this.cardClicked.bind( this )}>
          <div className='card-info card-category'>{this.props.item.category}</div>
          <div className='card-info card-name'>{this.props.item.name}</div>
          {price}
          <div className='card-info card-rating'>*rating*</div>
        </div>
      </div>
    );
  }
}

export default ProductCard;