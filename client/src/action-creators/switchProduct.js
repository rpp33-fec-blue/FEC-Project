import actionProductId from '../actions/productId.js';
import actionRelated from '../actions/relatedItems.js';
import actionReviews from '../actions/reviews.js';
import actionQuestions from '../actions/questions.js';
import actionMetadata from '../actions/metadata.js';
import actionStyles from '../actions/styles.js';
import actionProductInfo from '../actions/productInfo.js';
const axios = require('axios');

var switchProduct = ( productId ) => {

  return ( dispatch ) => {

    var relatedItems = axios.get( `http://localhost:8080/products/:${productId}/related`, { data: { product_id: productId } } );
    var reviews = axios.get( 'http://localhost:8080/reviews', { data: { product_id: productId, count: 1000 } } );
    var questions = axios.get( 'http://localhost:8080/qa/questions', { data: { product_id: productId, count: 1000 } } );
    var metadata = axios.get( 'http://localhost:8080/reviews/meta', { data: { product_id: productId } } );
    var styles = axios.get( `http://localhost:8080/products/:${productId}/styles`, { data: { product_id: productId } } );
    var productInfo = axios.get( `http://localhost:8080/products/:${productId}`, { data: { product_id: productId } } );

    Promise.all( [ relatedItems, reviews, questions, metadata, styles, productInfo ])
    .then( ( results ) => {
      dispatch( actionProductId( productId ) );
      dispatch( actionRelated( results[0].data ) );
      dispatch( actionReviews( results[1].data ) );
      dispatch( actionQuestions( results[2].data ) );
      dispatch( actionMetadata( results[3].data ) );
      dispatch( actionStyles( results[4].data ) );
      dispatch( actionProductInfo( results[5].data ) );
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
    });
  }
};

export default switchProduct;