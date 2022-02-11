import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';
const axios = require('axios');
var defaultProduct = 64620;

var addReview = ( newReview ) => {

  return ( dispatch ) => {

    const urlToPost = new URL("http://localhost:8080/reviews");
    urlToPost.searchParams.append("product_id", newReview.product_id );
    urlToPost.searchParams.append("rating", newReview.rating );
    urlToPost.searchParams.append("summary", newReview.summary );
    urlToPost.searchParams.append("body", newReview.body );
    urlToPost.searchParams.append("recommend", newReview.recommend );
    urlToPost.searchParams.append("name", newReview.name );
    urlToPost.searchParams.append("email", newReview.email );
    urlToPost.searchParams.append("photos", newReview.photos );
    urlToPost.searchParams.append("characteristics", newReview.characteristics );

    axios.post( urlToPost )
    .then( ( result ) => {
      var productId = store.getState().productId || defaultProduct;
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