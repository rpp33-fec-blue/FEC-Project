import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');

var addQuestion = ( newQuestion ) => {

  return ( dispatch ) => {

    axios.post( '/qa/questions', newQuestion )
    .then( ( results) => {
      var productId = store.getState().productId;
      axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } } )
      .then( ( questions ) => {
        dispatch( actionQuestions( questions.data ) );
      });
    })
    .catch( ( error ) => {
      console.log( 'Error posting question' );
    });

  };
};

export default addQuestion;