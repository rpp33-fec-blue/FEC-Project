import React from 'react';
import ProductCard from './productCard.jsx';
import AddOutfitCard from './addOutfitCard.jsx';

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
    var apiCalls = [];

    if (this.props.outfit.lenght === this.state.items.length) {
      this.isReady = true;
      this.setState({
        items: outfitArray
      });
    }

    for (var i = 0; i < this.props.outfit.length; i++) {
      var productId = this.props.outfit[i];
      apiCalls.push(axios.get(`http://localhost:8080/products/${productId}`, {params: {product_id: productId}} ));
      apiCalls.push(axios.get('http://localhost:8080/reviews/meta', {params: {product_id: productId}} ));
      apiCalls.push(axios.get(`http://localhost:8080/products/${productId}/styles`, {params: {product_id: productId}} ));
    }

    Promise.all(apiCalls).then((results) => {
      var outfitArray = [];
      for (var call = 0; call < results.length; call+=3) {
        var product = Object.assign(results[call].data.data, results[call + 1].data.data);
        var defaultFound = false;
        for (var style = 0; style < results[call + 2].data.data.results.length; style++) {
          if (results[call + 2].data.data.results[style]['default?']) {
            product = Object.assign(product, {styles: results[call + 2].data.data.results[style]});
            defaultFound = true;
            break;
          }
        }

        if (!defaultFound) {
          product = Object.assign(product, {styles: results[call + 2].data.data.results[0]});
        }

        outfitArray.push(product);
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
    this.props.handleAddOutfit(this.props.productId);
  }

  removeFromOutfit(productId) {
    this.props.handleRemoveOutfit(productId);
  }

  render() {

    if (!this.isReady) {
      this.buildOutfitList();
      return null;
    }

    this.isReady = false;

    return (
      <div className='card-list'>
        <AddOutfitCard addToOutfit={this.addToOutfit}/>
        {this.state.items.map((item) => {
          return (
            <ProductCard key={item.id} item={item} changeProduct={this.changeProduct} actionButton={this.removeFromOutfit} isOutfit={true}/>
          );
        })}
      </div>
    );
  }
}

export default OutfitList;