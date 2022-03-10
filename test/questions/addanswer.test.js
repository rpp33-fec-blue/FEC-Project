var { JSDOM } = require( "jsdom" );

import React from 'react';

import { Provider } from 'react-redux';
import store from '../../client/src/configureStore';

import AddAnswer from '../../client/src/components/qa/addanswer.jsx';
import initialState from '../../client/src/initialState.js'

import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;

describe('<AddAnswer>', () => {
  var question = initialState.questions[0]
  var questionId = question.question_id
  var addAnswer = mount(<Provider store={store}> <AddAnswer productId="64620" productName="Camo Onesie" question={question} questionId={questionId}/> </Provider>);
  it ('should have prop productId equal to initial state in store', () => {
    expect(addAnswer.find(AddAnswer).prop('productId')).toEqual("64620")
  })
  it ('should have prop productId equal to initial state in store', () => {
    expect(addAnswer.find(AddAnswer).prop('productName')).toEqual("Camo Onesie")
  })
  it('should have form with id overlay-addAnswer', () => {
    expect(addAnswer.find('form')).toHaveLength(1);
  })
  it('should have input boxes with correct input name', () => {
    expect(addAnswer.find({ name: "answer" })).toHaveLength(1);
    expect(addAnswer.find({ name: "nickname" })).toHaveLength(1);
    expect(addAnswer.find({ name: "email" })).toHaveLength(1);
    expect(addAnswer.find({ name: "answerphoto" })).toHaveLength(1);
    expect(addAnswer.find({ name: "submit" })).toHaveLength(1);
  })
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
