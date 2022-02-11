import actionReviews from '../actions/reviews.js';
import store from '../configureStore.js';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

var addReview = ( newReview ) => {

  return ( dispatch ) => {

    $.ajax({
      url: '/reviews',
      method: 'POST',
      data: newReview,
      success: ( results ) => {
        var reviews = store.getState().reviews;
        reviews.results.push( newReview );
        dispatch( actionReviews( reviews ) );
      },
      error: ( error ) => {
        console.log( 'Error posting review' );
      }
    })

  };
};

export default addReview;