import Question from './question.jsx';
import AddAnswer from './addanswer.jsx';

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
    console.log('noOfQuestions', noOfQuestions);
    console.log('questionsToShow', this.state.questionsToShow);
    console.log('moreAnswerQuestionVisible', this.state.moreAnswerQuestionVisible);
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
    // when the question is too long, cap maximum hieght for the question & Answer and make it scrollable
  }

  onForm () {
    onOverlay("overlay-addQuestion");
  }

  render () {

    var questions = this.props.filteredQ.map((question, index) => {
      if (index+1 <= this.state.questionsToShow) {
        return (
          <div key={index}>
            <Question question={question} questionId={question.question_id} />
            <AddAnswer question={question} questionId={question.question_id} />
          </div>
        )
      }
    });
    console.log('questions', questions);
    var moreAnswerQuestionVisibleBtn;
    
    if (this.state.moreAnswerQuestionVisible) {
      moreAnswerQuestionVisibleBtn = <button onClick={this.handleMoreAnswerQuestionClick.bind(this)}>MORE ANSWERED QUESTIONS</button>;
    } else {
      moreAnswerQuestionVisibleBtn = '';
    }

    return (
      <div className="questionlistdiv">
        <div className="questionlist">{questions}</div>
        <div className="qa-more-button">
          {moreAnswerQuestionVisibleBtn}
          <button onClick={this.onForm.bind(this)}>Add a question</button>
        </div>
      </div>
    );
  }
};
export default QuestionList;