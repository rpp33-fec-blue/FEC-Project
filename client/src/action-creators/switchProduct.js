import actionProductId from '../actions/productId.js';
import actionRelated from '../actions/relatedItems.js';
import actionReviews from '../actions/reviews.js';
import actionQuestions from '../actions/questions.js';
import actionAnswers from '../actions/answers.js';
import actionMetadata from '../actions/metadata.js';
import actionStyles from '../actions/styles.js';
import actionProductInfo from '../actions/productInfo.js';


var switchProduct = ( productId ) => {

  return ( dispatch ) => {

    var relatedItems = axios.get( `http://localhost:8080/products/:${productId}/related`, { params: { product_id: productId } } );
    var reviews = axios.get( 'http://localhost:8080/reviews', { params: { product_id: productId, count: 1000 } } );
    var questions = axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } } );
    var metadata = axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: productId } } );
    var styles = axios.get( `http://localhost:8080/products/:${productId}/styles`, { params: { product_id: productId } } );
    var productInfo = axios.get( `http://localhost:8080/products/:${productId}`, { params: { product_id: productId } } );

    Promise.all( [ relatedItems, reviews, questions, metadata, styles, productInfo ])
    .then( ( results ) => {
      dispatch( actionProductId( productId ) );
      dispatch( actionRelated( results[0].data ) );
      dispatch( actionReviews( results[1].data ) );
      dispatch( actionQuestions( results[2].data ) );
      dispatch( actionMetadata( results[3].data ) );
      dispatch( actionStyles( results[4].data ) );
      dispatch( actionProductInfo( results[5].data ) );
    })
    .catch( ( error ) => {
      console.log( 'Error getting data!' );
    });

  //   dispatch(actionProductId( productId ));

  //   axios.get( `http://localhost:8080/products/:${productId}/related` )  // related items
  //   .then( ( response ) => {
  //     dispatch( actionRelated( response.data ) ); // response.data may need to be changed!!

  //     axios.get( 'http://localhost:8080/reviews', { params: { product_id: productId, count: 1000 } } )  // reviews
  //     .then( ( response ) => {
  //       dispatch( actionReviews( response.data ) );

  //       axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } }  )  // questions
  //       .then( ( response ) => {

  //         // var answers = [];
  //         // response.data.results.forEach( ( question ) => {
  //         //   answers.push(axios.get( `http://localhost:8080/qa/questions/:${question.question_id}/answers` + ));  // answers
  //         // });

  //         // Promise.all( answers )
  //         //   .then( ( data) => {
  //         //     dispatch( actionAnswers( data ) );
  //         //   });

  //         dispatch( actionQuestions( response.data ) );

  //         axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } }  )  // metadata
  //         .then( ( response ) => {

  //           dispatch( actionQuestions( response.data ) );

  //           axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } }  )  // styles
  //           .then( ( response ) => {

  //             dispatch( actionQuestions( response.data ) );

  //             axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: productId, count: 1000 } }  )  // product info
  //             .then( ( response ) => {

  //               dispatch( actionQuestions( response.data ) );


  //             })
  //             .catch(( error ) => {
  //               console.log( 'Error getting product info' );
  //             });
  //           })
  //           .catch(( error ) => {
  //             console.log( 'Error getting styles' );
  //           });
  //         })
  //         .catch(( error ) => {
  //           console.log( 'Error getting metadata' );
  //         });
  //       })
  //       .catch(( error ) => {
  //         console.log( 'Error getting questions & answers data' );
  //       });

  //     })
  //     .catch(( error ) => {
  //       console.log( 'Error getting reviews data' );
  //     });

  //   })
  //   .catch(( error ) => {
  //     console.log( 'Error getting related item data' );
  //   });
  // };
};

export default switchProduct;