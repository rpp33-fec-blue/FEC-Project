import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');
var defaultProduct = 64620;

var addQuestion = ( newQuestion ) => {

  return ( dispatch ) => {

    const urlToPost = new URL("http://localhost:8080/qa/questions");
    urlToPost.searchParams.append("body", newQuestion.body );
    urlToPost.searchParams.append("name", newQuestion.name );
    urlToPost.searchParams.append("email", newQuestion.email );
    urlToPost.searchParams.append("product_id", newQuestion.product_id );

    axios.post( urlToPost )
    .then( ( results) => {
      var productId = store.getState().productId || defaultProduct;
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