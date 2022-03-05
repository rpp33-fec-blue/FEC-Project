import actionProductId from '../actions/productId.js';
import actionRelated from '../actions/relatedProducts.js';
import actionReviews from '../actions/reviews.js';
import actionQuestions from '../actions/questions.js';
import actionMetadata from '../actions/metadata.js';
import actionStyles from '../actions/styles.js';
import actionProductInfo from '../actions/productInfo.js';
import actionCart from '../actions/cart.js';
import actionOutfit from '../actions/outfit.js';
import actionLoadingStatus from '../actions/loading.js';
const axios = require('axios');
var defaultProduct = 64620;

var initializeState = ( productId, outfit ) => {

  return ( dispatch ) => {

    productId = Number(productId) || defaultProduct;
    var relatedItems = axios.get( `/products/${productId}/related`, { params: { product_id: productId } } );
    var reviews = axios.get( '/reviews', { params: { product_id: productId, count: 1000 } } );
    var questions = axios.get( '/qa/questions', { params: { product_id: productId, page: 1, count: 100 } } );
    var metadata = axios.get( '/reviews/meta', { params: { product_id: productId } } );
    var styles = axios.get( `/products/${productId}/styles`, { params: { product_id: productId } } );
    var productInfo = axios.get( `/products/${productId}`, { params: { product_id: productId } } );
    var cart = axios.get( '/cart' );

    Promise.all( [ relatedItems, reviews, questions, metadata, styles, productInfo, cart ])
    .then( ( results ) => {
      dispatch( actionProductId( productId ) );
      dispatch( actionOutfit( outfit ) );
      dispatch( actionRelated( results[0].data.data ) );
      dispatch( actionReviews( results[1].data.data ) );
      dispatch( actionQuestions( results[2].data.data.results ) );
      dispatch( actionMetadata( results[3].data.data ) );
      dispatch( actionStyles( results[4].data.data ) );
      dispatch( actionProductInfo( results[5].data.data ) );
      dispatch( actionCart( results[6].data.data ) );
      dispatch( actionLoadingStatus( false ) );
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
    });
  }
};

export default initializeState;