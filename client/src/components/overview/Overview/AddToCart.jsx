import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

class AddToCart extends React.Component {

  // Props: selectedStyleId, styles, addCart

  constructor(props) {
    super(props);
    // this.state = {
    //   sku: 0,
    //   sizeSelected: 'Select Size',
    //   quantitySelected: '-'
    // };
    // this.updateSizeSelected = this.updateSizeSelected.bind(this);
    // this.updateQuantitySelected = this.updateQuantitySelected.bind(this);
  }

  updateSizeSelected(event) {
    // TO DO
  }

  updateQuantitySelected(event) {
    // TO DO
  }

  render() {
    return (
      <div>
        <SizeSelector />
        <QuantitySelector />
        <button onClick={this.props.addCart}></button>
      </div>
    );
  }
};

export default SizeSelector;










/*

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: 0,
      sizeSelected: 'Select Size',
      quantitySelected: '-'
    };
    this.updateSizeSelected = this.updateSizeSelected.bind(this);
    this.updateQuantitySelected = this.updateQuantitySelected.bind(this);
  }

  updateSizeSelected(event) {
    const values = event.target.serializeArray();
    const size; // TO DO
    this.setState( { sizeSelected: size } );
  }

  updateQuantitySelected(event) {
    const values = event.target.serializeArray();
    const quantity; // TO DO
    this.setState( { quantitySelected: quantity } );
  }

  render() {
    return (
      <div>
        <SizeSelector selectedStyle={this.props.selectedStyle} sizeSelected={this.state.sizeSelected} updateSizeSelected={this.updateSizeSelected} />
        <QuantitySelector quantity={this.state.quantitySelected} updateQuantitySelected={this.updateQuantitySelected} />
        <button onClick={this.props.addCart}></button>
      </div>
    );
  }
};

export default SizeSelector;

*/