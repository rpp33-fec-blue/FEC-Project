import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');
var defaultProduct = 64620;

var reportAnswer = ( answerId ) => {

  return ( dispatch ) => {

    axios.put( `/qa/answers/${answerId}/report` )
      .then( ( ) => {
        var productId = store.getState().productId || defaultProduct;
        axios.get( '/qa/questions', { params: { product_id: productId, count: 1000 } } )
        .then( ( questions ) => {
          dispatch( actionQuestions( questions.data.data ) );
        });
      })
      .catch(( error ) => {
        console.log( 'Error updating answer' );
      });
  };
};

export default reportAnswer;