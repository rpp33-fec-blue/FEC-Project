var actions = {

  // updates state.productId
  CHANGE_PRODUCT: { type: 'CHANGE_PRODUCT', productId: null },

  // updates state.relatedProducts
  CHANGE_RELATED: { type: 'CHANGE_RELATED', relatedProducts: [] },

  // updates state.reviews
  ADD_REVIEW: { type: 'ADD_REVIEW', review: {} },
  MARK_REVIEW: { type: 'MARK_REVIEW', reviewId: null },
  /*REPORT_REVIEW: { type: 'REPORT_REVIEW', reviewId: null },*/

  // updates state.questions
  ADD_QUESTION: { type: 'ADD_QUESTION', question: {} },
  MARK_QUESTION: { type: 'MARK_QUESTION', questionId: null },

  // updates state.answers
  ADD_ANSWER: { type: 'ADD_ANSWER', answer: {} },
  MARK_ANSWER: { type: 'MARK_ANSWER', answerId: null },
  /* REPORT_ANSWER: { type: 'REPORT_ANSWER', answerId: null } */

  // updates state.cart
  ADD_CART: { type: 'ADD_CART', product: {} },
  REMOVE_CART: { type: 'REMOVE_CART', skuId: null },

  // updates state.outfit
  ADD_OUTFIT: { type: 'CHANGE_OUTFIT', product: {} },
  REMOVE_OUTFIT: { type: 'REMOVE_OUTFIT', skuId: null }

}

export default actions;