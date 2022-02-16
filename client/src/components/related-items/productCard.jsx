import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  cardClicked() {
    this.props.changeProduct( this.props.item.id )
  }

  render() {
    var photo = '';
    if ( this.props.item.styles ) {
      photo = this.props.item.styles.photos[0].url
      if ( photo === null ) {
        photo = './assets/light-grey.jpg';
      }
    } else {
      photo = './assets/light-grey.jpg';
    }

    return (
      <div className='product-card' onClick={this.cardClicked.bind( this )}>
        <img className='card-info card-photo' src={photo}></img>
        <div className='card-info-holder'>
          <div className='card-info card-category'>{this.props.item.category}</div>
          <div className='card-info card-product-name'>{this.props.item.name}</div>
          <div className='card-info card-price'>{this.props.item.default_price}</div>
          <div className='card-info card-rating'>*rating*</div>
        </div>
      </div>
    );
  }
}

export default ProductCard;