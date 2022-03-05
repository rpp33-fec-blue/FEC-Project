import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';
const axios = require('axios');
var defaultProduct = 64620;

var reportReview = ( reviewId ) => {

  return ( dispatch ) => {

    axios.put( `/reviews/${reviewId}/report` )
      .then( ( ) => {
        var productId = store.getState().productId || defaultProduct;
        axios.get( '/reviews', { params: { product_id: productId, count: 1000 } } )
        .then( ( reviews ) => {
          dispatch( actionReviews( reviews.data.data ) );
        });
      })
      .catch(( error ) => {
        console.log( 'Error updating review' );
      });
  };
};

export default reportReview;