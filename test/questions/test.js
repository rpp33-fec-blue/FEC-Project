var { JSDOM } = require( "jsdom" );

import React from 'react';

import ConnectedQA from '../../client/src/components/qa/qa.jsx';
import SearchBar from '../../client/src/components/qa/SearchBar.jsx';
import AddQuestion from '../../client/src/components/qa/addquestion.jsx';
import AddAnswer from '../../client/src/components/qa/addanswer.jsx';
import QuestionList from '../../client/src/components/qa/questionlist.jsx';
// import renderReactDom from '../../client/src/index.js';

import _ from 'underscore';
import {sortedQ, filteredQ, getAnswer} from '../../client/src/components/qa/helper.js';
import {shallow, mount} from 'enzyme';

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
    console.log({results});
    results.forEach((result, i) => {

      console.log('expected:', expected[i]);
      expect(result).toStrictEqual(expected[i]);

    })

  });
});

// Search Questions
describe('<SearchBar/>', () => {
  //Test user search and search function
  var jsdom = new JSDOM("<!doctype html><html><body></body></html>");
  var { window } = jsdom;
  global.window = window;
  global.document = window.document; // global.document is needed to use mount function

  var searchBar = mount(<SearchBar />);
  it('should have searchQuestion input bar', () => {
    expect(searchBar.find('#searchQuestion')).toHaveLength(1);
  })

  it('should be an input html element', () => {
    expect(searchBar.find('input')).toHaveLength(1);
  })

  it('should have searchQuestion input bar', () => {
    expect(searchBar.find('#searchQuestion')).toHaveLength(1);
  })

});

describe('<SearchBar/> integration testing', () => {
  // TODO : fix this to render in before
  JSDOM.fromFile("../../client/dist/index.html")
    .then(dom => {
      // console.log('dom serialize:', dom.serialize());
    })
    .catch((err) => {
      // console.log('err jsdom load in searchbar integration:', err);
    });
  // renderReactDom();

  // var appContainer = mount(<AppContainer />);
  var target = {
    target: {
      name: "searchQuestion",
      value: "small"
    }
  };

  it('should have a div parent', () => {
    // searchBar.find('#searchQuestion').simulate('change', target);
    // appContainer.debug();
    // expect(searchBar.find('#searchQuestion').parent().is('div')).toBe(true);
  })
})

/* Michelle guide
use react testing library just to test that your components are rendering.
Then pick one widget and test that, given a set of props,
it renders as you expect.
And lastly, pick one widget and test a user interaction.
You don't really want to test anything to do with the Atelier API, since you don't control that part of the architectur
*/









