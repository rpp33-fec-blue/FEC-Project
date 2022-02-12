import actionProductId from '../actions/productId.js';
import actionRelated from '../actions/relatedItems.js';
import actionReviews from '../actions/reviews.js';
import actionQuestions from '../actions/questions.js';
import actionMetadata from '../actions/metadata.js';
import actionStyles from '../actions/styles.js';
import actionProductInfo from '../actions/productInfo.js';
import actionCart from '../actions/cart.js';
import actionOutfit from '../actions/outfit.js';
const axios = require('axios');
var defaultProduct = 64620;

var initializeState = ( productId, outfit ) => {

  return ( dispatch ) => {
    var productId = productId || defaultProduct;
    var relatedItems = axios.get( `http://localhost:8080/products/${productId}/related`, { params: { product_id: productId } } );
    var reviews = axios.get( 'http://localhost:8080/reviews', { params: { product_id: productId, count: 1000 } } );
    var questions = axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } } );
    var metadata = axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: productId } } );
    var styles = axios.get( `http://localhost:8080/products/${productId}/styles`, { params: { product_id: productId } } );
    var productInfo = axios.get( `http://localhost:8080/products/${productId}`, { params: { product_id: productId } } );
    var cart = axios.get( 'http://localhost:8080/cart' );

    Promise.all( [ relatedItems, reviews, questions, metadata, styles, productInfo, cart ])
    .then( ( results ) => {
      dispatch( actionProductId( productId ) );
      dispatch( actionOutfit( outfit ) );
      dispatch( actionRelated( results[0].data.data ) );
      dispatch( actionReviews( results[1].data.data ) );
      dispatch( actionQuestions( results[2].data.data ) );
      dispatch( actionMetadata( results[3].data.data ) );
      dispatch( actionStyles( results[4].data.data ) );
      dispatch( actionProductInfo( results[5].data.data ) );
      dispatch( actionCart( results[6].data.data ) );
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
    });
  }
};

export default initializeState;