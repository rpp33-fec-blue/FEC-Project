var { JSDOM } = require( "jsdom" );

import React from 'react';
import Question from '../../client/src/components/qa/question.jsx';
import Answers from '../../client/src/components/qa/answers.jsx';
import initialState from '../../client/src/initialState.js'
import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;

describe('<Question/>', () => {
  var propQuestion = initialState.questions[0];
  var propQuestionId = propQuestion.question_id;

  var question = shallow(<Question question={propQuestion} questionId={propQuestionId}/>);

  it('should have one big div containing class container-question-answer', () => {
    expect(question.find('.container-question-answer')).toHaveLength(1);
  })
  it('should have one question div and one report-question div', () => {
    expect(question.find('.question')).toHaveLength(1);
    expect(question.find('.report-question')).toHaveLength(1);
  })

  it('should have one answer list', () => {
    expect(question.find(Answers)).toHaveLength(1);
  })

});
