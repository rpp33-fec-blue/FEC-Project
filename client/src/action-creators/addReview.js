import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';

var addReview = ( newReview ) => {
  var productId = store.getState().productId;

  return ( dispatch ) => {

    axios.post( `http://localhost:8080/reviews`, newReview )
      .then( ( ) => {
        var reviews = store.getState().reviews;
        reviews.results.push( newReview );
        dispatch( actionRelated( reviews ) )
      })
      .catch(( error ) => {
        console.log( 'Error posting review' );
      });
  };
};

export default addReview;