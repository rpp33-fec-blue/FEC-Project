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

    axios.get(`/initializeState`, {params: {product_id: productId}})
    .then((results) => {
      dispatch( actionProductId(productId));
      dispatch( actionOutfit(outfit));
      dispatch( actionRelated(results.data.data[0]));
      dispatch( actionReviews(results.data.data[1]));
      dispatch( actionQuestions(results.data.data[2]));
      dispatch( actionMetadata(results.data.data[3]));
      dispatch( actionStyles(results.data.data[4]));
      dispatch( actionProductInfo(results.data.data[5]));
      dispatch( actionCart(results.data.data[6]));
      dispatch( actionLoadingStatus(false));
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
    });
  }
};

export default initializeState;