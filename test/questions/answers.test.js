var { JSDOM } = require( "jsdom" );

import React from 'react';
import Answers from '../../client/src/components/qa/answers.jsx';
import Answer from '../../client/src/components/qa/answer.jsx';
import initialState from '../../client/src/initialState.js'
import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;

describe('<Answers/>', () => {
  var answersProp = [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
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
    }
  ]

  var answers = shallow(<Answers answers={answersProp} />);

  // this is error because setState takes time to update it.
  it('state buttonName should be empty string ', async () => {
    await answers.instance().componentDidMount();
    expect(answers.state('buttonName')).toEqual('');
  })

  it('should have no button, if answers length is 2 or less ', async () => {
    await answers.instance().componentDidMount();
    expect(answers.find('button')).toHaveLength(0);
  })

  it('should have many answers', async () => {
    var answers = await shallow(<Answers answers={answersProp} />);
    expect(answers.find(Answer)).toHaveLength(2);
  })

});