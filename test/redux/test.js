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