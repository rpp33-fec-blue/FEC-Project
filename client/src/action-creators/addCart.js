import actionCart from '../actions/cart.js';
import store from '../configureStore.js';

var addCart = ( skuId, count ) => {

  return ( dispatch ) => {

    axios.post( `http://localhost:8080/cart`, { sku_id: skuId, count: count } )
      .then( ( ) => {
        var items = store.getState().cart;
        items.push( { sku_id: skuId, count: count } );
        dispatch( actionQuestions( items ) );
      })
      .catch(( error ) => {
        console.log( 'Error adding to cart' );
      });
  };
};

export default addCart;