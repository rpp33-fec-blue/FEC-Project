import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';
const axios = require('axios');

var addReview = ( newReview ) => {

  return ( dispatch ) => {

    axios.post('/reviews', newReview )
    .then( ( result ) => {
      var productId = store.getState().productId;
      axios.get( 'http://localhost:8080/reviews', { params: { product_id: productId, count: 1000 } } )
      .then( ( reviews ) => {
        dispatch( actionReviews( reviews.data ) );
      });
    })
    .catch( ( error ) => {
      console.log( 'Error posting review' );
    });

  };
};

export default addReview;