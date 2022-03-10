var { JSDOM } = require( "jsdom" );

import React from 'react';

import _ from 'underscore';
import {sortedQ, filteredQ, getAnswer} from '../../client/src/components/qa/helper.js';

describe('sortedQ', () => {
  it('should sort array of question by question_helpfulness in descending order', () => {
    var questions = [{
      "question_id": 563775,
      "question_body": "Does this product run big or small?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 28,
      "reported": false
    },{
      "question_id": 563776,
      "question_body": "Does this product run big or small?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 100,
      "reported": false
    },{
      "question_id": 563780,
      "question_body": "Does this product run big or small?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 127,
      "reported": false
    },{
      "question_id": 563790,
      "question_body": "Does this product run big or small?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 125,
      "reported": false
    }];

    var sorted = sortedQ(questions);
    var sortedHelpfulness = _.map(sorted, (question) => {
      return question.question_helpfulness;
    })
    expect(sortedHelpfulness).toEqual([127, 125, 100, 28]);
  });
});

describe('filteredQ', () => {
  it('should filter array of questions by for searchValue', () => {
    var searchValue = 'cat';
    var questions = [{
      "question_id": 563775,
      "question_body": "Does this product run big or small?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 28,
      "reported": false
    },{
      "question_id": 563776,
      "question_body": "Will the cat bite?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 100,
      "reported": false
    },{
      "question_id": 563780,
      "question_body": "Cat are friendly or not?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 127,
      "reported": false
    },{
      "question_id": 563790,
      "question_body": "The product looks like a small cat or not?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 125,
      "reported": false
    }];

    var results = filteredQ(questions, searchValue);
    var expected = [
      {
        "question_id": 563780,
        "question_body": "Cat are friendly or not?",
        "question_date": "2019-01-17T00:00:00.000Z",
        "asker_name": "jbilas",
        "question_helpfulness": 127,
        "reported": false
      },{
        "question_id": 563790,
        "question_body": "The product looks like a small cat or not?",
        "question_date": "2019-01-17T00:00:00.000Z",
        "asker_name": "jbilas",
        "question_helpfulness": 125,
        "reported": false
      },{
        "question_id": 563776,
        "question_body": "Will the cat bite?",
        "question_date": "2019-01-17T00:00:00.000Z",
        "asker_name": "jbilas",
        "question_helpfulness": 100,
        "reported": false
      }
    ];
    // console.log({results});
    results.forEach((result, i) => {

      // console.log('expected:', expected[i]);
      expect(result).toStrictEqual(expected[i]);

    })

  });
});