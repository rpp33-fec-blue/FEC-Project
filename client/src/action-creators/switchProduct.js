import actionProductId from '../actions/productId.js';
import actionRelated from '../actions/relatedItems.js';
import actionReviews from '../actions/reviews.js';
import actionQuestions from '../actions/questions.js';
import actionAnswers from '../actions/answers.js';


var switchProduct = ( productId ) => {

  return ( dispatch ) => {
    dispatch(actionProductId( productId ));

    axios.get( `http://localhost:8080/products/:${productId}/related` )  // related items
      .then( ( response ) => {
        dispatch( actionRelated( response.data ) ); // response.data may need to be changed!!

        axios.get( 'http://localhost:8080/reviews', { params: { product_id: productId, count: 1000 } } )  // reviews
        .then( ( response ) => {
          dispatch( actionReviews( response.data ) );

          axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } }  )  // questions
          .then( ( response ) => {

            // var answers = [];
            // response.data.results.forEach( ( question ) => {
            //   answers.push(axios.get( `http://localhost:8080/qa/questions/:${question.question_id}/answers` + ));  // answers
            // });

            // Promise.all( answers )
            //   .then( ( data) => {
            //     dispatch( actionAnswers( data ) );
            //   });

            dispatch( actionQuestions( response.data ) );
          })
          .catch(( error ) => {
            console.log( 'Error getting questions & answers data' );
          });

        })
        .catch(( error ) => {
          console.log( 'Error getting reviews data' );
        });

      })
      .catch(( error ) => {
        console.log( 'Error getting related item data' );
      });
  };
};

export default switchProduct;