import initialState from './initialState';

const changeQuestions = (state = initialState.questions, action) => {
  if (action.type === 'CHANGE_QUESTIONS') {
    return action.questions;
  }
  return state;
};

export default changeQuestions;