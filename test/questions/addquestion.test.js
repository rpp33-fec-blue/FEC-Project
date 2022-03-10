var { JSDOM } = require( "jsdom" );

import React from 'react';

import { Provider } from 'react-redux';
import store from '../../client/src/configureStore';

import AddQuestion from '../../client/src/components/qa/addquestion.jsx';
import initialState from '../../client/src/initialState.js'

import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;

describe('<AddQuestion>', () => {
  var questions = initialState.questions;
  var addQuestion = mount(<Provider store={store}> <AddQuestion productId="64620" productName="Camo Onesie" questions={questions}/> </Provider>);
  it ('should have prop productId equal to initial state in store', () => {
    expect(addQuestion.find(AddQuestion).prop('productId')).toEqual("64620")
  })
  it ('should have prop productId equal to initial state in store', () => {
    expect(addQuestion.find(AddQuestion).prop('productName')).toEqual("Camo Onesie")
  })
  it ('should have prop questions equal to initial state in store', () => {
    expect(addQuestion.find(AddQuestion).prop('questions')).toEqual(questions);
  })

  // console.log(addQuestion.debug());
  it('should have form with id overlay-addQuestion', () => {
    expect(addQuestion.find('#overlay-addQuestion')).toHaveLength(1);
    expect(addQuestion.find('form')).toHaveLength(1);
  })
  it('should have input boxes with correct input name', () => {
    expect(addQuestion.find({ name: "question" })).toHaveLength(1);
    expect(addQuestion.find({ name: "nickname" })).toHaveLength(1);
    expect(addQuestion.find({ name: "email" })).toHaveLength(1);
    expect(addQuestion.find({ name: "submit" })).toHaveLength(1);
  })

  // test clicking
  // will show overlay pop up window
  // check that question is the overlay is correct
});