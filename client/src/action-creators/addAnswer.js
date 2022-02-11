import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');

var addAnswer = ( questionId, newAnswer ) => {

  return ( dispatch ) => {

    axios.post( `http://localhost:8080/qa/questions/${questionId}/answers`, newAnswer )
      .then( ( ) => {
        var productId = store.getState().productId;
        axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } } )
        .then( ( questions ) => {
          dispatch( actionQuestions( questions.data ) );
        });
      })
      .catch(( error ) => {
        console.log( 'Error posting answer' );
      });

  };
};

export default addAnswer;