import actionCart from '../actions/cart.js';
import store from '../configureStore.js';
const axios = require('axios');

var addCart = ( items ) => {

  return ( dispatch ) => {

    const urlToPost = new URL("http://localhost:8080/cart");
    urlToPost.searchParams.append("sku_id", items.sku_id );
    urlToPost.searchParams.append("count", items.count );

    axios.post( urlToPost )
    .then( ( result ) => {
      axios.get( '/cart' )
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