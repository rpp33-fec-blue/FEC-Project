import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');

var markQuestion = ( questionId ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.

  return ( dispatch ) => {

    axios.put( `http://localhost:8080/qa/questions/${questionId}/helpful` ) // unsure of what to pass as second arguement. The API page does not make it clear when it needs.
      .then( ( ) => {
        var questions = store.getState().questions;
        var results = questions.results.map( ( result ) => {
          if ( result.question_id === questionId ) {
            result.helpfulness++;
          }

          return result;
        });

        questions.results = results;
        dispatch( actionQuestions( questions ) );
      })
      .catch(( error ) => {
        console.log( 'Error updating question' );
      });
  };
};

export default markQuestion;