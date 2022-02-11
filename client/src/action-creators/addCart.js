import actionCart from '../actions/cart.js';
import store from '../configureStore.js';
const axios = require('axios');

var addCart = ( items ) => {

  return ( dispatch ) => {

    axios.post( '/cart', items )
    .then( ( result ) => {
      axios.get( '/cart' )
      .then( ( cart ) => {
        dispatch( actionCart( cart ) );
      })
    })
    .catch( ( error ) => {
      console.log( 'Error adding to cart' );
    });

  };
};

export default addCart;