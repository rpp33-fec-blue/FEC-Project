import Answers from './answers.jsx';
import {getAnswer} from './helper.js';
import markQuestion from '../../action-creators/markQuestion.js';
import React from 'react';

class Question extends React.Component {

  constructor(props) {
    super(props);
    // props
    // props.question
    // props.questionId

    this.state = {
      answers: [],
      helpfulQuestion: this.props.question.question_helpfulness,
      helpfulQuestionClicked: false,
      answersFetching: false
    }
  }

  fetchData () {
    this.setState({
      answersFetching: true
    }, () => {
      getAnswer(this.props.questionId, (results) => {
        this.setState({
          answers: results,
          answersFetching: false
        })
      });
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.questionId !== prevProps.questionId) {
      this.fetchData();
    }
  }

  onForm () {
    onOverlay(`overlay-addAnswer-${this.props.questionId}`);
  }

  markHelpfulQuestion () {
    if (!this.state.helpfulQuestionClicked) {
      var questionId = this.props.questionId;
      axios.put( `/qa/questions/${questionId}/helpful` )
        .then(() => {
          this.setState((prevState) => {
            return {
              helpfulQuestion: prevState.helpfulQuestion + 1,
              helpfulQuestionClicked: true
            }
          })
        })
        .catch();
    }
    // markQuestion(this.props.questionId); Try later when got time
  }

  render() {
    var answers = this.state.answersFetching ? <i className="fa fa-spinner fa-spin"></i> : <Answers answers={this.state.answers}/>;
    var body = this.props.question.question_body;

    return (
      <div className="container-question-answer">
        <div className="question">
          <h4>Q: {body}</h4>

        {answers}
        </div>
        <div className="report-question">
          <span> Helpful? </span>
          <span><a href="#/" className="smallLink" onClick={this.markHelpfulQuestion.bind(this)}> Yes({this.state.helpfulQuestion})</a> | </span>
          <span><a href="#/" className="smallLink" onClick={this.onForm.bind(this)}>Add Answer</a></span>
        </div>
      </div>
    );
  }
};
export default Question;