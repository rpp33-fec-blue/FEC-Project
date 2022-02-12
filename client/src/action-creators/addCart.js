import actionCart from '../actions/cart.js';
import store from '../configureStore.js';
const axios = require('axios');

var addCart = ( items ) => {

  return ( dispatch ) => {

    axios.post( "http://localhost:8080/cart", items )
    .then( ( result ) => {
      axios.get( 'http://localhost:8080/cart' )
      .then( ( cart ) => {
        dispatch( actionCart( cart.data ) );
      })
    })
    .catch( ( error ) => {
      console.log( 'Error adding to cart' );
    });

  };
};

export default addCart;