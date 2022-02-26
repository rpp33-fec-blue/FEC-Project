import _ from 'underscore';
import {sortedQ, filteredQ, getAnswer} from '../../client/src/components/qa/helper.js';
import {mount} from 'enzyme';

import ConnectedQA from '../../components/qa/qa.jsx';
import SearchBar from '../../components/qa/SearchBar.jsx';
import AddQuestion from '../../components/qa/addquestion.jsx';
import AddAnswer from '../../components/qa/addanswer.jsx';



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
  var searchBar = mount(<SearchBar />);
  searchBar.find('button').simulate('click');

    // user input value into the search question input
      // if more than or equal to 3 char is inputted
        // search with all value must return correct filtered array in questionList components

      // if less than 3 is inputted
        // search will not be called
        // filtered array will be equal to current sorted array

});

// Questions List
describe('Questions List', () => {
  // questionsToShow state in questionList component must be updated everytime
    // the buttonToShowMoreQuestion is clicked

  //toShow questions must depends on
    //1.filtered array in prop of questionList component
    //2.questionsToShow state in questionList component

  //Test render questions
    // if there are 1 question in toShow array
      // render 1 question
      // no "more question button"
    // else if there are 2 question
      // render 2 question
      // no "more question button"
    // otherwise
      // render 2 question
      // have "more question button"

    // if more questionButton is cliced
      // if filtered = 4, toshow update from 2 to 4
        // two more answers must be renders
        // no "more question button"
      // else if filtered = 5, toshow update from 2 to 4
        // two more answers must be renders
        // have "more question button"
      // else if filtered = 3, toshow update from 2 to 4
        // 1 more answers must be renders
        // no "more question button"
});

// Individual Questions
describe('Individual Questions', () => {
  //Test render answers
    // if there are 1 answers in toShow array
      // render 1 answers
      // no "more answers button"
    // else if there are 2 answers
      // render 2 answers
      // no "more answers button"
    // otherwise
      // render 2 answers
      // have "more answers button"

    // if more answersButton is cliced
      // if filtered = 4, toshow update from 2 to 4
        // two more answers must be renders
        // no "more question button"
      // else if filtered = 5, toshow update from 2 to 4
        // two more answers must be renders
        // have "more question button"
      // else if filtered = 3, toshow update from 2 to 4
        // 1 more answers must be renders
        // no "more question button"
});

//Add a question
describe('Add a question', () => {
  //Click add a questions
    // must open an overlays form

  //Click X at the top of the form
    //should close and overlay form

  //Click submit with not complete mandatory field
    // the formContent should be invisible
    // show error message on the overlays : "You must enter the following: questions/nickname/email"

  //Click submit with complete mandatory field but invalid email format
    // the formContent should be invisible
    // show error message on the overlays :  "You must enter the following: email in a correct format"

  //Click submit with complete mandatory field and no validation error
    // should submit form
    // the formContent are all unmounted
    // show complete message

    // get data posted from API
    // current input should match with the question of last id from answers question
});

//Add an answer
describe('Add a answer', () => {
  //Click add a answer
    // must open an overlays form

  //Click X at the top of the form
    //should close and overlay form

  //Click upload photo
    // Click upload 1 photo
      // should show thumbnail of the uploaded photo
      // should show button to upload more photo
    // Click upload 5 times
      // should 5 thumbnails of the uploaded photo
      // should not show button to upload more photo

  //Click submit with not complete mandatory field
    // the formContent should be invisible
    // show error message on the overlays : "You must enter the following: answers/nickname/email"

  //Click submit with complete mandatory field but invalid email format
    // the formContent should be invisible
    // show error message on the overlays :  "You must enter the following: email in a correct format"

  //Click submit with complete mandatory field but images selected are invalid or unable to be uploaded.
    // the formContent are all unmounted
    // show error message on the overlays :  "You must enter the following:images selected are invalid or unable to be uploaded."

  //Click submit with complete mandatory field and no validation error
    // should submit form
    // the formContent are all unmounted
    // show complete message

    // get data posted from API
    // current input should match with the answer of last id from answers array
});

// Report an answer
describe('Report an answer', () => {

});
// Helpful question
describe('Helpful question', () => {

});
// Helpful answer
describe('Helpful answer', () => {

});