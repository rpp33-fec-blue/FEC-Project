import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');
var defaultProduct = 64620;

var addAnswer = ( questionId, newAnswer ) => {

  return ( dispatch ) => {

    var urlToPost = new URL(`http://localhost:8080/qa/questions/${questionId}/answers`);
    urlToPost.searchParams.append("body", newAnswer.body );
    urlToPost.searchParams.append("name", newAnswer.name );
    urlToPost.searchParams.append("email", newAnswer.email );
    urlToPost.searchParams.append("photos", newAnswer.photos );

    axios.post( urlToPost )
      .then( ( ) => {
        var productId = store.getState().productId || defaultProduct;
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