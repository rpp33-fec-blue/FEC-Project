var { JSDOM } = require( "jsdom" );

import React from 'react';
import Answer from '../../client/src/components/qa/answer.jsx';
import initialState from '../../client/src/initialState.js'
import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;
window.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

describe('<Answer/>', () => {
  var propAnswer = {
    "answer_id": 5,
    "body": "Something pretty durable but I can't be sure",
    "date": "2018-01-04T00:00:00.000Z",
    "answerer_name": "metslover",
    "helpfulness": 5,
    "photos": [{
        "id": 1,
        "url": "urlplaceholder/answer_5_photo_number_1.jpg"
      },
      {
        "id": 2,
        "url": "urlplaceholder/answer_5_photo_number_2.jpg"
      }
    ]
  };
  var propAnswerId = propAnswer.answer_id;

  var answer = shallow(<Answer answerId={propAnswerId} answer={propAnswer}/>);

  it('should have one big div containing class answer', () => {
    expect(answer.find('.answer')).toHaveLength(1);
  })
  it('should have these classnames inside answer class', () => {
    expect(answer.find('.A')).toHaveLength(1);
    expect(answer.find('.answer-body')).toHaveLength(1);
    expect(answer.find('.answer-images')).toHaveLength(1);
    expect(answer.find('.helpful')).toHaveLength(1);
    expect(answer.find('.timeStamp')).toHaveLength(1);
    expect(answer.find('.helpfulLink')).toHaveLength(1);
    expect(answer.find('.reportLink')).toHaveLength(1);

  })

});
