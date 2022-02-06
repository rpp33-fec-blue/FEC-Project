const changeQuestions = (questions) => {
  return {
    type: 'CHANGE_QUESTIONS',
    questions: questions
  };
};

export default changeQuestions;