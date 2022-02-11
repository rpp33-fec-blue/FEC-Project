import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';
const axios = require('axios');

var reportReview = ( reviewId ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.

  return ( dispatch ) => {

    axios.put( `http://localhost:8080/reviews/:${reviewId}/report` ) // unsure of what to pass as second arguement. The API page does not make it clear when it needs.
      .then( ( ) => {
        var reviews = store.getState().reviews;
        var results = reviews.results.filter( ( result ) => {
          return  result.review_id !== reviewId
        });

        reviews.results = results;
        dispatch( actionReviews( reviews ) )
      })
      .catch(( error ) => {
        console.log( 'Error updating review' );
      });
  };
};

export default reportReview;