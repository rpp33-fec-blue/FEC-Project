import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');

var reportAnswer = ( questionId, answerId ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.

  return ( dispatch ) => {

    axios.put( `http://localhost:8080/qa/answers/${answerId}/report` ) // unsure of what to pass as second arguement. The API page does not make it clear when it needs.
      .then( ( ) => {
        var productId = store.getState().productId;
        axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } } )
        .then( ( questions ) => {
          dispatch( actionQuestions( questions ) );
        });
      })
      .catch(( error ) => {
        console.log( 'Error updating answer' );
      });
  };
};

export default reportAnswer;