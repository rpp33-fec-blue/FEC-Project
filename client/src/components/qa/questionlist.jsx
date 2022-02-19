import Question from './question.jsx';
import AddAnswer from './addanswer.jsx';

class QuestionList extends React.Component {

  constructor (props) {
    super(props);
    //Current props
    //props.sortedQ
    //props.filteredQ
    this.state = {
      questionsToShow: 2
    }
  }

  handleMoreAnswerQuestionClick () {
    // button that will add two more <IndividualQuestion /> everytime you click
    // if there is one left then only add one.
    // If nothing left in the list, hid the button.
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
    })

    return (
      <div>
        <div className="questionlist">{questions}</div>
        <div className="qa-more-button">
          <button>MORE ANSWERED QUESTIONS</button>
          <button onClick={this.onForm.bind(this)}>Add a question</button>
        </div>
      </div>
    );
  }
};
export default QuestionList;