import actionCart from '../actions/cart.js';
import store from '../configureStore.js';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

var addCart = ( items ) => {

  return ( dispatch ) => {

    $.ajax({
      url: '/cart',
      method: 'POST',
      data: items,
      success: ( result ) => {
        var items = store.getState().cart;
        items.push( { sku_id: skuId, count: count } );
        dispatch( actionCart( items ) );
      },
      error: ( error ) => {
        console.log( 'Error adding to cart' );
      }
    })

  };
};

export default addCart;