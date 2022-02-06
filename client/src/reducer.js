import initialState from './initialState';

var rootReducer = (state = initialState, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {

    case 'CHANGE_PRODUCT': {
      newState.productId = action.productId;
      return newState;
    }

    case 'CHANGE_RELATED': {
      newState.relatedProducts = action.relatedProducts;
      return newState;
    }

    case 'ADD_QUESTION': {
      newState.reviews.push(action.review);
      return newState;
    }

    case 'MARK_REVIEW': {
      newState.reviews.forEach((review) => {
        if (review.review_id === action.reviewId) {
          review.helpfulness += 1;
        }
      });
      return newState;
    }

    case 'ADD_QUESTION': {
      newState.questions.push(action.question);
      return newState;
    }

    case 'MARK_QUESTION': {
      newState.questions.forEach((question) => {
        if (question.question_id === action.questionId) {
          question.helpfulness += 1;
        }
      });
      return newState;
    }

    case 'ADD_ANSWER': {
      newState.answers.push(action.answer);
      return newState;
    }

    case 'MARK_ANSWER': {
      newState.answers.forEach((answer) => {
        if (answer.answer_id === action.answerId) {
          answer.helpfulness += 1;
        }
      });
      return newState;
    }

    case 'ADD_CART': {
      newState.cart.push(action.product);
      return newState;
    }

    case 'REMOVE_CART': {
      var itemIndex = null;
      for (var index = 0; index < newState.cart.length; index++) {
        if (newState.cart[index].sku_id === action.skuId) {
          itemIndex = index;
        }
      }
      if (itemIndex !== null) {
        newState.cart.splice(itemIndex, 1);
      }
      return newState;
    }

    case 'ADD_OUTFIT': {
      newState.outfit.push(action.product);
      return newState;
    }

    case 'REMOVE_OUTFIT': {
      var itemIndex = null;
      for (var index = 0; index < newState.outfit.length; index++) {
        if (newState.outfit[index].sku_id === action.skuId) {
          itemIndex = index;
        }
      }
      if (itemIndex !== null) {
        newState.outfit.splice(itemIndex, 1);
      }
      return newState;
    }

    default: return newState
  }
}

export default rootReducer;