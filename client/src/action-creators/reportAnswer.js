import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';

var reportAnswer = ( questionId, answerId ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.
  var productId = store.getState().productId;

  return ( dispatch ) => {

    axios.put( `http://localhost:8080/qa/answers/:${answerId}/report` ) // unsure of what to pass as second arguement. The API page does not make it clear when it needs.
      .then( ( ) => {
        var questions = store.getState().questions;
        var results = questions.results.map( ( result ) => {
          if ( result.question_id === questionId ) {
            var updatedAnswers = result.answers.filter( ( answer ) => {
              return answer.answer_id !== answerId;
            });

            results.answers = updatedAnswers;
          }

          return result;
        });

        questions.results = results;
        dispatch( actionQuestions( questions ) );
      })
      .catch(( error ) => {
        console.log( 'Error updating answer' );
      });
  };
};

export default reportAnswer;