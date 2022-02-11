import "babel-polyfill";

// Actions
import changeCart from '../../client/src/actions/cart.js';
import changeOutfit from '../../client/src/actions/outfit.js';
import changeProductId from '../../client/src/actions/productId.js';
import changeRelatedItems from '../../client/src/actions/relatedItems.js';
import changeReviews from '../../client/src/actions/reviews.js';
import changeQuestions from '../../client/src/actions/questions.js';
import changeMetadata from '../../client/src/actions/metadata.js';
import changeStyles from '../../client/src/actions/styles.js';
import changeProductInfo from '../../client/src/actions/productInfo.js';

// Reducers
import reducerCart from '../../client/src/reducers/changeCart.js';
import reducerOutfit from '../../client/src/reducers/changeOutfit.js';
import reducerProductId from '../../client/src/reducers/changeProduct.js';
import reducerRelatedItems from '../../client/src/reducers/changeRelated.js';
import reducerReviews from '../../client/src/reducers/changeReviews.js';
import reducerQuestions from '../../client/src/reducers/changeQuestions.js';
import reducerMetadata from '../../client/src/reducers/changeMetadata.js';
import reducerStyles from '../../client/src/reducers/changeStyles.js';
import reducerProductInfo from '../../client/src/reducers/changeProductInfo.js';

// Action Creator
import addAnswer from '../../client/src/action-creators/addAnswer.js';
import addCart from '../../client/src/action-creators/addCart.js';
import addOutfit from '../../client/src/action-creators/addOutfit.js';
import addQuestion from '../../client/src/action-creators/addQuestion.js';
import addReview from '../../client/src/action-creators/addReview.js';
import markAnswer from '../../client/src/action-creators/markAnswer.js';
import markQuestion from '../../client/src/action-creators/markQuestion.js';
import markReview from '../../client/src/action-creators/markReview.js';
import removeOutfit from '../../client/src/action-creators/removeOutfit.js';
import reportAnswer from '../../client/src/action-creators/reportAnswer.js';
import reportReview from '../../client/src/action-creators/reportReview.js';
import switchProduct from '../../client/src/action-creators/switchProduct.js';

describe( 'Actions', () => {
  describe( 'Product Id', () => {
    it( 'should be a function', () => {
      expect( typeof changeProductId ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeProductId( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_PRODUCT"', () => {
      expect( changeProductId( 'test' ).type ).toEqual( 'CHANGE_PRODUCT' );
    });
    it('should return an object with a "productId" key equal to the inputted value', () => {
      expect( changeProductId( 'test' ).productId ).toEqual( 'test' );
    });
  });
  describe( 'Cart', () => {
    it( 'should be a function', () => {
      expect( typeof changeCart ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeCart( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_CART"', () => {
      expect( changeCart( 'test' ).type ).toEqual( 'CHANGE_CART' );
    });
    it('should return an object with a "cart" key equal to the inputted value', () => {
      expect( changeCart( 'test' ).cart ).toEqual( 'test' );
    });
  });
  describe( 'Outfit', () => {
    it( 'should be a function', () => {
      expect( typeof changeOutfit ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeOutfit( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_OUTFIT"', () => {
      expect( changeOutfit( 'test' ).type ).toEqual( 'CHANGE_OUTFIT' );
    });
    it('should return an object with a "outfit" key equal to the inputted value', () => {
      expect( changeOutfit( 'test' ).outfit ).toEqual( 'test' );
    });
  });
  describe( 'Related Products', () => {
    it( 'should be a function', () => {
      expect( typeof changeRelatedItems ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeRelatedItems( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_RELATED"', () => {
      expect( changeRelatedItems( 'test' ).type ).toEqual( 'CHANGE_RELATED' );
    });
    it('should return an object with a "relatedProducts" key equal to the inputted value', () => {
      expect( changeRelatedItems( 'test' ).relatedProducts ).toEqual( 'test' );
    });
  });
  describe( 'Reviews', () => {
    it( 'should be a function', () => {
      expect( typeof changeReviews ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeReviews( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_REVIEWS"', () => {
      expect( changeReviews( 'test' ).type ).toEqual( 'CHANGE_REVIEWS' );
    });
    it('should return an object with a "reviews" key equal to the inputted value', () => {
      expect( changeReviews( 'test' ).reviews ).toEqual( 'test' );
    });
  });
  describe( 'Questions', () => {
    it( 'should be a function', () => {
      expect( typeof changeQuestions ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeQuestions( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_QUESTIONS"', () => {
      expect( changeQuestions( 'test' ).type ).toEqual( 'CHANGE_QUESTIONS' );
    });
    it('should return an object with a "questions" key equal to the inputted value', () => {
      expect( changeQuestions( 'test' ).questions ).toEqual( 'test' );
    });
  });
  describe( 'Metadata', () => {
    it( 'should be a function', () => {
      expect( typeof changeMetadata ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeMetadata( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_METADATA"', () => {
      expect( changeMetadata( 'test' ).type ).toEqual( 'CHANGE_METADATA' );
    });
    it('should return an object with a "metadata" key equal to the inputted value', () => {
      expect( changeMetadata( 'test' ).metadata ).toEqual( 'test' );
    });
  });
  describe( 'Styles', () => {
    it( 'should be a function', () => {
      expect( typeof changeStyles ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeStyles( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_STYLES"', () => {
      expect( changeStyles( 'test' ).type ).toEqual( 'CHANGE_STYLES' );
    });
    it('should return an object with a "styles" key equal to the inputted value', () => {
      expect( changeStyles( 'test' ).styles ).toEqual( 'test' );
    });
  });
  describe( 'Product Info', () => {
    it( 'should be a function', () => {
      expect( typeof changeProductInfo ).toBe( 'function' );
    });
    it( 'should return an object', () => {
      expect( typeof changeProductInfo( 'test' ) ).toBe( 'object' );
    });
    it( 'should return an object with a "type" key equal to "CHANGE_PRODUCT_INFO"', () => {
      expect( changeProductInfo( 'test' ).type ).toEqual( 'CHANGE_PRODUCT_INFO' );
    });
    it('should return an object with a "productInfo" key equal to the inputted value', () => {
      expect( changeProductInfo( 'test' ).productInfo ).toEqual( 'test' );
    });
  });
});

describe( 'Reducers', () => {
  var fakeAction = ( value ) => ({
    type: 'FAKE',
    value: value
  });

  describe( 'Cart', function() {
    it( 'should change state when changeCart action is passed in', function() {
      expect( reducerCart( 'old state', changeCart( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerCart( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Outfit', function() {
    it( 'should change state when changeOutfit action is passed in', function() {
      expect( reducerOutfit( 'old state', changeOutfit( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerOutfit( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Product Id', function() {
    it( 'should change state when changeProductId action is passed in', function() {
      expect( reducerProductId( 'old state', changeProductId( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerProductId( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Related Items', function() {
    it( 'should change state when changeRelatedItems action is passed in', function() {
      expect( reducerRelatedItems( 'old state', changeRelatedItems( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerRelatedItems( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Reviews', function() {
    it( 'should change state when changeReviews action is passed in', function() {
      expect( reducerReviews( 'old state', changeReviews( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerReviews( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Questions', function() {
    it( 'should change state when changeQuestions action is passed in', function() {
      expect( reducerQuestions( 'old state', changeQuestions( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerQuestions( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Metadata', function() {
    it( 'should change state when changeMetadata action is passed in', function() {
      expect( reducerMetadata( 'old state', changeMetadata( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerMetadata( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Styles', function() {
    it( 'should change state when changeStyles action is passed in', function() {
      expect( reducerStyles( 'old state', changeStyles( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerStyles( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
  describe( 'Product Info', function() {
    it( 'should change state when changeProductInfo action is passed in', function() {
      expect( reducerProductInfo( 'old state', changeProductInfo( 'new state' ) ) ).toEqual( 'new state' );
    });
    it( 'should retain original state when a different action is passed in', function() {
      expect( reducerProductInfo( 'old state', fakeAction( 'new state' ) ) ).toEqual( 'old state' );
    });
  });
});

describe( 'Action-Creators', () => {
  var state = {};
  beforeEach( () => {
    state = {
      productId: 11,
      productInfo: { "id": 11, "name": "Air Minis 250" },
      styles: { "product_id": 11 },
      metadata: { "product_id": 11, "ratings": { 2: 1, 3: 1, 4: 2}},
      relatedProducts: [ 2, 3, 4 ],
      reviews: { "product": 11, "results": [ { "review_id": 5, "rating": 3, "helpfulness": 5 } ] },
      questions: { "product_id": 11, "results": [ { "question_id": 37, "answers": { 68: { "id": 68, "helpfulness": 4 } } } ] }, // answers is not an array...
      cart: [ { "sku_id": 1, "count": 2 } ],
      outfit: [ 5 ]
    }
  });

  describe( 'Switch Product', () => {
    it( 'should return a function', () => {
      expect( typeof switchProduct() ).toBe( 'function' );
    });
    it( 'should modify the state', ( done ) => {
      var startingState = JSON.parse(JSON.stringify(state));

      var fakeDispatch = ( action ) => {
        if ( action.type === 'CHANGE_METADATA' ) {
          state.metadata = action.metadata;
          expect( startingState.metadata ).not.toEqual( state.metadata );
        }
        if (action.type === 'CHANGE_PRODUCT') {
          state.productId = action.productId;
          expect( startingState.productId ).not.toEqual( state.productId );
        }
        if (action.type === 'CHANGE_PRODUCT_INFO') {
          state.productInfo = action.productInfo;
          expect( startingState.productInfo ).not.toEqual( state.productInfo );
          done();
        }
        if (action.type === 'CHANGE_QUESTIONS') {
          state.questions = action.questions;
          expect( startingState.questions ).not.toEqual( state.questions );
        }
        if (action.type === 'CHANGE_RELATED') {
          state.relatedProducts = action.relatedProducts;
          expect( startingState.relatedProducts ).not.toEqual( state.relatedProducts );
        }
        if (action.type === 'CHANGE_REVIEWS') {
          state.reviews = action.reviews;
          expect( startingState.reviews ).not.toEqual( state.reviews );
        }
        if ( action.type === 'CHANGE_STYLES' ) {
          state.styles = action.styles;
          expect( startingState.styles ).not.toEqual( state.styles );
        }
      }

      switchProduct( 64620 )( fakeDispatch );
    });
  });
  // describe( 'Add Question', () => {
  //   it( 'should return a function', () => {
  //     expect( typeof addQuestion() ).toBe( 'function' );
  //   });
  //   it( 'should modify the questions in state', ( done ) => {
  //     var startingState = JSON.parse(JSON.stringify(state));

  //     var fakeDispatch = ( action ) => {
  //       if (action.type === 'CHANGE_QUESTIONS') {
  //         state.questions = action.questions;
  //         expect( startingState.questions ).not.toEqual( state.questions );
  //         done();
  //       }
  //     }

  //     var newQuestion = { 'body': 'this is a test to see if the message posts', 'name': 'joe', 'email': 'test@gmail.com', 'product_id': 64620 };
  //     addQuestion( newQuestion )( fakeDispatch );
  //   });
  // });
  // describe( 'Add Answer', () => {
  //   it( 'should return a function', () => {
  //     expect( typeof addAnswer() ).toBe( 'function' );
  //   });
  //   it( 'should modify the the questions (answers do not have their own state) state', ( done ) => {
  //     var startingState = JSON.parse(JSON.stringify(state));

  //     var fakeDispatch = ( action ) => {
  //       if (action.type === 'CHANGE_QUESTIONS') {
  //         state.questions = action.questions;
  //         expect( startingState.questions ).not.toEqual( state.questions );
  //         done();
  //       }
  //     }

  //     var newAnswer = { "body": 'test answer', "name": 'joe', "email": "test@gmail.com", "photos": [] };
  //     addAnswer( 37, newAnswer )( fakeDispatch );
  //   });
  // });
  // describe( 'Add Review', () => {
  //   it( 'should return a function', () => {
  //     expect( typeof addReview() ).toBe( 'function' );
  //   });
  //   it( 'should modify the the reviews state', ( done ) => {
  //     var startingState = JSON.parse(JSON.stringify(state));

  //     var fakeDispatch = ( action ) => {
  //       if (action.type === 'CHANGE_REVIEWS') {
  //         state.reviews = action.reviews;
  //         expect( startingState.reviews ).not.toEqual( state.reviews );
  //         done();
  //       }
  //     }

  //     var newReview = { "product_id": 64620, "rating": 5, "summary": "good product?", "body": "it may be good i do not know, this is only a test and the product isnt real",
  //     "recommend": true, "name": "joe", "email": 'test@gmail.com', "photos": [], "characteristics": { } };
  //     addReview( newReview )( fakeDispatch );
  //   });
  // });
  // describe( 'Add Cart', () => {
  //   it( 'should return a function', () => {
  //     expect( typeof addCart() ).toBe( 'function' );
  //   });
  //   it( 'should modify the the cart state', ( done ) => {
  //     var startingState = JSON.parse(JSON.stringify(state));

  //     var fakeDispatch = ( action ) => {
  //       if (action.type === 'CHANGE_CART') {
  //         state.cart = action.cart;
  //         expect( startingState.cart ).not.toEqual( state.cart );
  //         done();
  //       }
  //     }

  //     var newItems = { 'sku_id': 5, 'count': 1 }
  //     addCart( newItems )( fakeDispatch );
  //   });
  // });
  // describe( 'Add Outfit', () => {
  //   it( 'should return a function', () => {
  //     expect( typeof addOutfit() ).toBe( 'function' );
  //   });
  //   it( 'should modify the the outfit state', () => {
  //     var startingState = JSON.parse(JSON.stringify(state));

  //     var fakeDispatch = ( action ) => {
  //       if (action.type === 'CHANGE_OUTFIT') {
  //         state.outfit = action.outfit;
  //         expect( startingState.outfit ).not.toEqual( state.outfit );
  //       }
  //     }

  //     var newOutfit = 64620
  //     addOutfit( newOutfit )( fakeDispatch );
  //   });
  // });
  describe( 'Mark Answer', () => {
    it( 'should return a function', () => {
      expect( typeof markAnswer() ).toBe( 'function' );
    });
    it( 'should modify the the questions (which hold the answers) state', ( done ) => {
      var startingState = JSON.parse(JSON.stringify(state));

      var fakeDispatch = ( action ) => {
        if (action.type === 'CHANGE_QUESTIONS') {
          state.questions = action.questions;
          expect( startingState.questions ).not.toEqual( state.questions );
          done();
        }
      }

      markAnswer( 5 )( fakeDispatch );
    });
  });
  describe( 'Mark Question', () => {
    it( 'should return a function', () => {
      expect( typeof markQuestion() ).toBe( 'function' );
    });
    it( 'should modify the the questions state', ( done ) => {
      var startingState = JSON.parse(JSON.stringify(state));

      var fakeDispatch = ( action ) => {
        if (action.type === 'CHANGE_QUESTIONS') {
          state.questions = action.questions;
          expect( startingState.questions ).not.toEqual( state.questions );
          done();
        }
      }

      markQuestion( 563775 )( fakeDispatch );
    });
  });
  describe( 'Mark Review', () => {
    it( 'should return a function', () => {
      expect( typeof markReview() ).toBe( 'function' );
    });
    it( 'should modify the the reviews state', ( done ) => {
      var startingState = JSON.parse(JSON.stringify(state));

      var fakeDispatch = ( action ) => {
        if (action.type === 'CHANGE_REVIEWS') {
          state.reviews = action.reviews;
          expect( startingState.reviews ).not.toEqual( state.reviews );
          done();
        }
      }

      markReview( 1135519 )( fakeDispatch );
    });
  });
  describe( 'Remove Outfit', () => {
    it( 'should return a function', () => {
      expect( typeof removeOutfit() ).toBe( 'function' );
    });
    it( 'should modify the the outfit state', ( done ) => {
      var startingState = JSON.parse(JSON.stringify(state));

      var fakeDispatch = ( action ) => {
        if (action.type === 'CHANGE_OUTFIT') {
          state.outfit = action.outfit;
          expect( startingState.outfit ).not.toEqual( state.outfit );
          done();
        }
      }

      removeOutfit( 5 )( fakeDispatch );
    });
  });
  describe( 'Report Answer', () => {
    it( 'should return a function', () => {
      expect( typeof reportAnswer() ).toBe( 'function' );
    });
    it( 'should modify the the questions state', ( done ) => {
      var startingState = JSON.parse(JSON.stringify(state));

      var fakeDispatch = ( action ) => {
        if (action.type === 'CHANGE_QUESTIONS') {
          state.questions = action.questions;
          expect( startingState.questions ).not.toEqual( state.questions );
          done();
        }
      }

      reportAnswer( 5269961 )( fakeDispatch );
    });
  });
  describe( 'Report Review', () => {
    it( 'should return a function', () => {
      expect( typeof reportReview() ).toBe( 'function' );
    });
    it( 'should modify the the reviews state', ( done ) => {
      var startingState = JSON.parse(JSON.stringify(state));

      var fakeDispatch = ( action ) => {
        if (action.type === 'CHANGE_REVIEWS') {
          state.reviews = action.reviews;
          expect( startingState.reviews ).not.toEqual( state.reviews );
          done();
        }
      }

      reportReview( 1135493 )( fakeDispatch );
    });
  });
});