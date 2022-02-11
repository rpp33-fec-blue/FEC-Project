import actionQuestions from '../actions/questions.js';
import store from '../configureStore.js';
const axios = require('axios');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

var addQuestion = ( newQuestion ) => {

  return ( dispatch ) => {

    $.ajax({
      url: '/qa/questions',
      method: 'POST',
      data: newQuestion,
      success: ( results ) => {
        console.log( 'results', results );
        console.log('store:', store);
        var questions = store.getState().questions;
        questions.results.push( newQuestion );
        dispatch( actionQuestions( questions ) );
      },
      error: ( error ) => {
        console.log('error:', error);
      }
    });

  };
};

export default addQuestion;