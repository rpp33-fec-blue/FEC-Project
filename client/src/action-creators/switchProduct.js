import actionProductId from '../actions/productId.js';
import actionRelated from '../actions/relatedProducts.js';
import actionReviews from '../actions/reviews.js';
import actionQuestions from '../actions/questions.js';
import actionMetadata from '../actions/metadata.js';
import actionStyles from '../actions/styles.js';
import actionProductInfo from '../actions/productInfo.js';
const axios = require('axios');

var switchProduct = ( productId ) => {
  console.log('id in switchProduct state1', productId);
  return ( dispatch ) => {
    axios.get(`/switchProduct`, {params: {product_id: productId}})
    .then((results) => {
      dispatch( actionProductId(productId));
      dispatch( actionRelated(results.data.data[0]));
      dispatch( actionReviews(results.data.data[1]));
      dispatch( actionQuestions(results.data.data[2]));
      dispatch( actionMetadata(results.data.data[3]));
      dispatch( actionStyles(results.data.data[4]));
      dispatch( actionProductInfo(results.data.data[5]));
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
    });
  }
};

export default switchProduct;