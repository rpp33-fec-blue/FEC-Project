import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartButton from './AddToCartButton.jsx';

class AddToCart extends React.Component {

  // Props: selectedStyleIndex, styles, handleAddCart

  constructor(props) {
    super(props);
    this.state = {
      sku: null,
      sizeSelected: 'Select Size',
      quantitySelected: ' - ',
      outOfStock: false
    };
    this.updateSizeSelectedAndSku = this.updateSizeSelectedAndSku.bind(this);
    this.updateQuantitySelected = this.updateQuantitySelected.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateOutOfStock = this.updateOutOfStock.bind(this);
  }

  updateSizeSelectedAndSku(event) {
    const newSize = event.target.value;
    var sku;
    const skus = this.props.styles.results[this.props.selectedStyleIndex].skus;
    for (var sku in skus) {
      if (skus[sku].size === newSize) {
        sku = sku;
        break;
      }
    }
    this.setState( { sku: sku, sizeSelected: newSize, quantitySelected: 1 } );
  }

  updateQuantitySelected(event) {
    const newQuantity = event.target.value;
    this.setState( { quantitySelected: newQuantity } );
  }

  addToCart() {
    this.props.handleAddCart(this.state.sku, this.state.quantitySelected);
  }

  updateOutOfStock() {
    this.setState( { outOfStock: true } );
  }

  render() {
    return (
      <div>
        <SizeSelector
          styles={this.props.styles}
          selectedStyleIndex={this.props.selectedStyleIndex}
          sizeSelected={this.state.sizeSelected}
          updateSizeSelectedAndSku={this.updateSizeSelectedAndSku}
          updateOutOfStock={this.updateOutOfStock}
        />
        <QuantitySelector
          styles={this.props.styles}
          selectedStyleIndex={this.props.selectedStyleIndex}
          sku={this.state.sku}
          sizeSelected={this.state.sizeSelected}
          quantitySelected={this.state.quantitySelected}
          updateQuantitySelected={this.updateQuantitySelected}
        />
        <AddToCartButton
          outOfStock={this.state.outOfStock}
          sizeSelected={this.state.sizeSelected}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
};

export default AddToCart;