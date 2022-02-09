import changeProduct from './reducers/changeProduct.js';
import changeProductInfo from './reducers/changeProductInfo.js';
import changeMetadata from './reducers/changeMetadata.js';
import changeStyles from './reducers/changeStyles.js';
import changeRelated from './reducers/changeRelated.js';
import changeReviews from './reducers/changeReviews.js';
import changeQuestions from './reducers/changeQuestions';
import changeCart from './reducers/changeCart';
import changeOutfit from './reducers/changeOutfit';

const rootReducer = (state = {}, action) => {
  return {
    productId: changeProduct(state.productId, action),
    relatedProducts: changeRelated(state.relatedProducts, action),
    productInfo : changeProductInfo(state.productInfo, action),
    metadata : changeMetadata(state.metadata, action),
    styles : changeStyles(state.styles, action),
    reviews: changeReviews(state.reviews, action),
    questions: changeQuestions(state.questions, action),
    cart: changeCart(state.cart, action),
    outfit: changeOutfit(state.outfit, action)
  };
};

export default rootReducer;