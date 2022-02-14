import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='product-card'>
        <img className='card-info card-photo' src={this.props.item.photo}></img>
        <div className='card-info card-category'>{this.props.item.category}</div>
        <div className='card-info card-product-name'>{this.props.item.name}</div>
        <div className='card-info card-price'>{this.props.item.price}</div>
        <div className='card-info card-rating'>{this.props.item.rating}</div>
      </div>
    );
  }
}

export default ProductCard;