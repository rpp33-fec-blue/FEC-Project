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

var sortedA = (answers) => {
  var sorted = _.chain(answers)
    .sortBy((answers) => { return answers.helpfulness})
    .reverse()
    .value();
  return sorted;
};

var getAnswer = (questionID, callback) => {

  return axios.get(`/qa/questions/${questionID}/answers`)
    .then((results) => {
      var answers = results.data.data.results;
      var sorted = sortedA(answers)
      return callback(sorted);
    })
    .catch(err => {
      throw 'error in getAnswer call'
    });

};

export {sortedQ, filteredQ, getAnswer};