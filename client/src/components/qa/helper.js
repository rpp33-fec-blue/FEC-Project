var sortedQ = (questions) => {
  var sorted = questions // TODO:
  return  sorted;
};

var filteredQ = (input = '') => {
  var filtered = input // TODO:
  return filtered;
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