import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import OutfitToggle from './OutfitToggle.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductFeatures from './ProductFeatures.jsx';
import AddToCartButton from './AddToCartButton.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';

class Overview extends React.Component {

  // Props: productId, metadata, productInfo, styles, cart, outfit, handleAddCart, handleAddOutfit, handleRemoveOutfit

  constructor(props) {
    super(props);

    const skus = this.props.styles.results[0].skus;
    var outOfStockBool = true;
    for (var sku in skus) {
      if (skus[sku].quantity > 0) {
        outOfStockBool = false;
      }
    }

    this.state = {
      styles: this.props.styles,
      selectedStyleIndex: 0,
      selectedImageIndex: 0,
      sku: null,
      sizeSelected: 'Select Size',
      quantitySelected: 0,
      outOfStock: outOfStockBool
    };

    this.updateSelectedStyle = this.updateSelectedStyle.bind(this);
    this.updateSelectedImageIndex = this.updateSelectedImageIndex.bind(this);
    this.updateSizeSelectedAndSku = this.updateSizeSelectedAndSku.bind(this);
    this.updateQuantitySelected = this.updateQuantitySelected.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateOutOfStock = this.updateOutOfStock.bind(this);
  }

  updateSelectedStyle(event) {
    const newSelectedStyleIndex = event.target[Object.keys(event.target)[0]].index;
    console.log(newSelectedStyleIndex);
    const skus = this.props.styles.results[newSelectedStyleIndex].skus;
    var outOfStock = true;
    for (var sku in skus) {
      if (skus[sku].quantity > 0) {
        outOfStock = false;
      }
    }
    if (outOfStock) {
      this.setState({ selectedStyleIndex: newSelectedStyleIndex, sku: null, sizeSelected: 'Select Size', quantitySelected: 0, outOfStock: true });
    } else {
      this.setState({ selectedStyleIndex: newSelectedStyleIndex, sku: null, sizeSelected: 'Select Size', quantitySelected: 0, outOfStock: false });
    }
  }

  updateSelectedImageIndex(event) {
    const newSelectedImageIndex = event.target[Object.keys(event.target)[1]].value;
    if (newSelectedImageIndex === 'left') {
      this.setState((state, props) => ({ selectedImageIndex: state.selectedImageIndex - 1 }));
    } else if (newSelectedImageIndex === 'right') {
      this.setState((state, props) => ({ selectedImageIndex: state.selectedImageIndex + 1 }));
    } else {
      this.setState({ selectedImageIndex: newSelectedImageIndex });
    }
  }

  updateSizeSelectedAndSku(event) {
    const newSize = event.target.value;
    var sku;
    const skus = this.props.styles.results[this.state.selectedStyleIndex].skus;
    for (var sku in skus) {
      if (skus[sku].size === newSize) {
        sku = sku;
        break;
      }
    }
    this.setState({ sku: sku, sizeSelected: newSize, quantitySelected: 1 });
  }

  updateQuantitySelected(event) {
    const newQuantity = Number(event.target.value);
    this.setState({ quantitySelected: newQuantity });
  }

  addToCart() {
    this.props.handleAddCart(this.state.sku, this.state.quantitySelected);
  }

  updateOutOfStock() {
    this.setState({ outOfStock: true });
  }

  render() {
    return (
      <ErrorBoundary component={'Overview'}>
        <div className='item-widget-overview'>
          <div className='overview-container'>
            <div className='image-gallery-container'>
              <ImageGallery
                styles={this.props.styles}
                selectedStyleIndex={this.state.selectedStyleIndex}
                selectedImageIndex={this.state.selectedImageIndex}
                updateSelectedImageIndex={this.updateSelectedImageIndex}
              />
            </div>
            <div className='summary-container'>
              <ProductInformation
                productId={this.props.productId}
                metadata={this.props.metadata}
                productInfo={this.props.productInfo}
                styles={this.props.styles}
                selectedStyleIndex={this.state.selectedStyleIndex}
              />
              <StyleSelector
                styles={this.props.styles}
                selectedStyleIndex={this.state.selectedStyleIndex}
                updateSelectedStyle={this.updateSelectedStyle}
                sku={this.state.sku}
              />
              <AddToCart
                styles={this.props.styles}
                selectedStyleIndex={this.state.selectedStyleIndex}
                handleAddCart={this.props.handleAddCart}
                sku={this.state.sku}
                sizeSelected={this.state.sizeSelected}
                quantitySelected={this.state.quantitySelected}
                updateSizeSelectedAndSku={this.updateSizeSelectedAndSku}
                updateQuantitySelected={this.updateQuantitySelected}
                addToCart={this.addToCart}
                updateOutOfStock={this.updateOutOfStock}
              />
              <div className='add-toggle'>
                <AddToCartButton
                  outOfStock={this.state.outOfStock}
                  sizeSelected={this.state.sizeSelected}
                  addToCart={this.addToCart}
                />
                <OutfitToggle
                  productId={this.props.productId}
                  outfit={this.props.outfit}
                  handleAddOutfit={this.props.handleAddOutfit}
                  handleRemoveOutfit={this.props.handleRemoveOutfit}
                />
              </div>
            </div>
            <div className='product-overview-container'>
              <ProductOverview
                productInfo={this.props.productInfo}
              />
            </div>
            <div className='product-features-container'>
              <ProductFeatures
                productInfo={this.props.productInfo}
              />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Overview;