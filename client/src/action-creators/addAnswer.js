import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');

var addAnswer = ( questionId, newAnswer ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.

  return ( dispatch ) => {

    axios.post( `http://localhost:8080/qa/questions/${questionId}/answers`. newAnswer )
      .then( ( ) => {
        var questions = store.getState().questions;
        var results = questions.results.map( ( result ) => {
          if ( result.question_id === questionId ) {
            result.answers.push( newAnswer );
          }

          return result;
        });

        questions.results = results;
        dispatch( actionQuestions( questions ) );
      })
      .catch(( error ) => {
        console.log( 'Error posting answer' );
      });
  };
};

export default addAnswer;