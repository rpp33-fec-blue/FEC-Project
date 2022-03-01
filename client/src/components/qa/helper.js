import _ from 'underscore';
import React from 'react';
import axios from 'axios';

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
  var config = {
    params: {
      page: 1,
      count: 100
    }
  }

  axios.get(`/qa/questions/${questionID}/answers`, config)
    .then((results) => {
      var answers = results.data.data.results;
      var sorted = sortedA(answers)
      callback(sorted);
    })
    .catch((err) => {
      console.log('err in getAnswer', err);
    });

};

export {sortedQ, filteredQ, getAnswer};