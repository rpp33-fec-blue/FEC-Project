import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');

var addQuestion = ( newQuestion ) => {

  return ( dispatch ) => {

    axios.post( `http://localhost:8080/qa/questions`, newQuestion )
      .then( ( ) => {
        var questions = store.getState().questions;
        questions.results.push( newQuestion );
        dispatch( actionQuestions( questions ) );
      })
      .catch(( error ) => {
        console.log( 'Error posting questions' );
      });
  };
};

export default addQuestion;