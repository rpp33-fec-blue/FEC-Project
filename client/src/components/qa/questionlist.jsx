import Question from './question.jsx';
import AddAnswer from './addanswer.jsx';
import React from 'react';
class QuestionList extends React.Component {

  constructor (props) {
    super(props);
    //Current props
    //props.sortedQ
    //props.filteredQ
    this.state = {
      questionsToShow: 2,
      moreAnswerQuestionVisible: true
    }
  }

  handleMoreAnswerQuestionClick (e) {
    e.preventDefault;
    var noOfQuestions = this.props.filteredQ.length;
    var numOfQuestionsToAdd = noOfQuestions - this.state.questionsToShow ;

    if (numOfQuestionsToAdd <= 2) {
      // no "more question button"
      this.setState((prevState) => {
        return {
          moreAnswerQuestionVisible: false,
          questionsToShow: prevState.questionsToShow + numOfQuestionsToAdd
        }
      })
    } else if (numOfQuestionsToAdd > 2) {
      // have "more question button"
      this.setState((prevState) => {
        return {
          moreAnswerQuestionVisible: true,
          questionsToShow: prevState.questionsToShow + 2
        }
      })
    }

  }

  onForm () {
    onOverlay("overlay-addQuestion");
  }

  render () {

    var questions = this.props.filteredQ.map((question, index) => {
      if (index+1 <= this.state.questionsToShow) {
        console.log('question.question_id', question.question_id)
        return (
          <div key={index}>
            <Question question={question} questionId={question.question_id} />
            <AddAnswer question={question} questionId={question.question_id} />
          </div>
        )
      }
    });

    var moreAnswerQuestionVisibleBtn;

    if (this.state.moreAnswerQuestionVisible) {
      moreAnswerQuestionVisibleBtn = <button onClick={this.handleMoreAnswerQuestionClick.bind(this)}>MORE ANSWERED QUESTIONS</button>;
    } else {
      moreAnswerQuestionVisibleBtn = '';
    }

    return (
      <div className="questionlist-and-btn">
        <div className="questionlist">{questions}</div>
        <div className="btn-container">
          {moreAnswerQuestionVisibleBtn}
          <button onClick={this.onForm.bind(this)}>ADD A QUESTION</button>
        </div>
      </div>
    );
  }
};
export default QuestionList;