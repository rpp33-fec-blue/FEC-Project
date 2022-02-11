import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';
const axios = require('axios');

var addReview = ( newReview ) => {

  return ( dispatch ) => {

    axios.post( `http://localhost:8080/reviews`, newReview )
      .then( ( ) => {
        var reviews = store.getState().reviews;
        reviews.results.push( newReview );
        dispatch( actionReviews( reviews ) )
      })
      .catch(( error ) => {
        console.log( 'Error posting review' );
      });
  };
};

export default addReview;