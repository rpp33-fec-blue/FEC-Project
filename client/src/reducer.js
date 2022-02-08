import changeProduct from './reducers/changeProduct.js';
import changeRelated from './reducers/changeRelated.js';
import changeReviews from './reducers/changeReviews.js';
import changeQuestions from './reducers/changeQuestions';
import changeCart from './reducers/changeCart';
import changeOutfit from './reducers/changeOutfit';

const rootReducer = (state = {}, action) => {
  return {
    productId: changeProduct(state.productId, action),
    relatedProducts: changeRelated(state.relatedProducts, action),
    reviews: changeReviews(state.reviews, action),
    questions: changeQuestions(state.questions, action),
    cart: changeCart(state.cart, action),
    outfit: changeOutfit(state.outfit, action)
  };
};

export default rootReducer;