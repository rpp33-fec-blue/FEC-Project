import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    console.log('productCard props:', this.props);
  }

  render() {
    return (
      <div className='product-card'>
        <img className='card-info card-photo' src={this.props.item.photo}></img>
        <div className='card-info card-category'>{this.props.item.category}</div>
        <div className='card-info card-product-name'>{this.props.item.name}</div>
        <div className='card-info card-price'>{this.props.item.default_price}</div>
        <div className='card-info card-rating'>*rating*</div>
      </div>
    );
  }
}

export default ProductCard;