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
  }

  buildOutfitList() {
    var apiCalls = [];
    for ( var i = 0; i < this.props.outfit.length; i++ ) {
      var productId = this.props.outfit[i];
      apiCalls.push(axios.get( `http://localhost:8080/products/${productId}`, { params: { product_id: productId } } ));
      apiCalls.push(axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: productId } } ));
      apiCalls.push(axios.get( `http://localhost:8080/products/${productId}/styles`, { params: { product_id: productId } } ));
    }

    Promise.all(apiCalls).then( ( results ) => {
      var outfitArray = [];
      for ( var call = 0; call < results.length; call+=3 ) {
        var product = Object.assign( results[ call ].data.data, results[ call + 1 ].data.data );
        for ( var style = 0; style < results[ call + 2 ].data.data.results.length; style++ ) {
          if ( results[ call + 2 ].data.data.results[ style ]['default?'] ) {
            product = Object.assign( product, { styles: results[ call + 2 ].data.data.results[ style ] } );
            break;
          }
        }
        outfitArray.push( product );
      }

      this.isReady = true;
      this.setState({
        items: outfitArray
      });
    });
  }

  changeProduct( productId ) {
    this.props.handleSwitchProduct( productId );
  }

  addToOutfit() {
    this.isReady = false;
    this.props.handleAddOutfit( this.props.productId );
  }

  removeFromOutfit( productId ) {
    this.isReady = false;
    this.props.handleRemoveOutfit( productId );
  }

  render() {

    if ( !this.isReady ) {
      this.buildOutfitList();
      return null;
    }

    return (
      <div className='card-list'>
        <AddOutfitCard addToOutfit={this.addToOutfit.bind( this )}/>
        {this.state.items.map( ( item ) => {
          return (
            <ProductCard key={item.id} item={ item } changeProduct={this.changeProduct.bind( this )} actionButton={this.removeFromOutfit.bind( this )} isOutfit={true}/>
          );
        })}
      </div>
    );
  }
}

export default OutfitList;