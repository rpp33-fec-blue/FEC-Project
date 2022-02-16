import _ from 'underscore';

var sortedQ = (questions) => {
  var sorted = _.chain(questions)
    .sortBy((question) => { return question.question_helpfulness})
    .reverse()
    .value();
  return sorted;
};

var filteredQ = (questions, input = '') => {
  var filtered = _.filter(questions, (question) => {
    var body = question.question_body.toLowerCase();

    if (body.includes(input)) {
      return question;
    }
  });

  return sortedQ(filtered);
}

var getAnswer = (questionID, callback) => {
  // TODO

  // call api and get list of answers of this questionID
  return axios.get(`/qa/questions/${questionID}/answers`)
    .then((results) => {
      var answers = results.data.data.results;
      // TODO: sort array according to helpfulness

      return callback(answers);
    })
    .catch(err => {
      throw 'error in getAnswer call'
    });

};

export {sortedQ, filteredQ, getAnswer};