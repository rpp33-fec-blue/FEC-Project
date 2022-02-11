import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';
const axios = require('axios');

var markReview = ( reviewId ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.

  return ( dispatch ) => {

    axios.put( `http://localhost:8080/reviews/${reviewId}/helpful` ) // unsure of what to pass as second arguement. The API page does not make it clear when it needs.
      .then( ( ) => {
        var productId = store.getState().productId;
        axios.get( 'http://localhost:8080/reviews', { params: { product_id: productId, count: 1000 } } )
        .then( ( reviews ) => {
          dispatch( actionReviews( reviews ) );
        });
      })
      .catch(( error ) => {
        console.log( 'Error updating review' );
      });
  };
};

export default markReview;