var { JSDOM } = require( "jsdom" );

import React from 'react';
import QuestionList from '../../client/src/components/qa/questionlist.jsx';
import initialState from '../../client/src/initialState.js'

import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;

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
