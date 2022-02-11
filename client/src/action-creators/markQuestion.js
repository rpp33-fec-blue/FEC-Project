import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');

var markQuestion = ( questionId ) => {

  return ( dispatch ) => {

    axios.put( `http://localhost:8080/qa/questions/${questionId}/helpful` )
      .then( ( ) => {
        var productId = store.getState().productId;
        axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } } )
        .then( ( questions ) => {
          dispatch( actionQuestions( questions ) );
        });
      })
      .catch(( error ) => {
        console.log( 'Error updating question' );
      });
  };
};

export default markQuestion;