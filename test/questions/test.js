var { JSDOM } = require( "jsdom" );

import React from 'react';

import { Provider } from 'react-redux';
import store from '../../client/src/configureStore';

import ConnectedQA from '../../client/src/components/qa/qa.jsx';
import SearchBar from '../../client/src/components/qa/SearchBar.jsx';
import AddQuestion from '../../client/src/components/qa/addquestion.jsx';
import AddAnswer from '../../client/src/components/qa/addanswer.jsx';
import QuestionList from '../../client/src/components/qa/questionlist.jsx';
import Question from '../../client/src/components/qa/question.jsx';
import AppContainer from '../../client/src/app.jsx';
import initialState from '../../client/src/initialState.js'

import _ from 'underscore';
import {sortedQ, filteredQ, getAnswer} from '../../client/src/components/qa/helper.js';
import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;

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

describe('<SearchBar/>', () => {
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

describe('<QuestionList>', () => {
  var questionsProps = initialState.questions;
  var questionList = shallow(<QuestionList sortedQ={questionsProps} filteredQ={questionsProps}/>);
  var questionWrapper = questionList.find('Question');
  var addAnswerWrapper = questionList.find('Connect(AddAnswerComp)');

  it('should render Question', (done) => {
    expect(questionWrapper.length).toEqual(2);
    done();
  })

  it('question props questionId should equal to 563775 and 563777', () => {
    questionWrapper.forEach((node, i) => {
      if (i === 0) {
        expect(node.prop('questionId')).toEqual(563775)
      } else if (i === 1) {
        expect(node.prop('questionId')).toEqual(563777)
      }
    })
  })

  it('question should have props question with object data type', () => {
    questionWrapper.forEach((node) => {
      expect(typeof node.prop('question') === 'object').toBe(true)
    })
  })

  it('should render AddAnswer', () => {
    expect(addAnswerWrapper.length).toEqual(2);
  })

  it('AddAnswer should have props question and questionId', () => {
    addAnswerWrapper.forEach((node) => {
      expect(typeof node.prop('question') === 'object').toBe(true)
      expect(typeof node.prop('questionId') === 'number').toBe(true)
    })
  })

  it('AddAnswer props questionId should equal to 563775 and 563777', () => {
    questionWrapper.forEach((node, i) => {
      if (i === 0) {
        expect(node.prop('questionId')).toEqual(563775)
      } else if (i === 1) {
        expect(node.prop('questionId')).toEqual(563777)
      }
    })
  })
});

describe('<AddAnswer>', () => {
  var addAnswer = shallow(<Provider store={store}> <AddAnswer productId="64620" productName="Camo Onesie"/> </Provider>);
  expect(addAnswer.find(AddAnswer).prop('productId')).toEqual("64620")
  expect(addAnswer.find(AddAnswer).prop('productName')).toEqual("Camo Onesie")

  // test clicking add answer component
  // will show overlay pop up window
  // check that question is the overlay is correct
});



/* Michelle guide
use react testing library just to test that your components are rendering.
Then pick one widget and test that, given a set of props,
it renders as you expect.
And lastly, pick one widget and test a user interaction.
You don't really want to test anything to do with the Atelier API, since you don't control that part of the architectur
*/
