import Answers from './answers.jsx';
import {getAnswer} from './helper.js';
import markQuestion from '../../action-creators/markQuestion.js';

class Question extends React.Component {

  constructor(props) {
    super(props);
    //props
    // props.question
    // props.questionId

    this.state = {
      answers: [],
      helpfulQuestion: this.props.question.question_helpfulness,
      helpfulQuestionClicked: false
    }
  }

  componentDidMount() {
    getAnswer(this.props.questionId, (results) => {
      this.setState({
        answers: results
      })
    });
  }

  onForm () {
    onOverlay("overlay-addAnswer");
  }

  // componentDidUpdate (prevProps) {
  //   if (prevProps.question.question_helpfulness !== this.props.question.question_helpfulness) {
  //     this.setState({
  //       helpfulQuestion: this.props.question.question_helpfulness
  //     })
  //   }
  // }

  markHelpfulQuestion () {
    if (!this.state.helpfulQuestionClicked) {
      var questionId = this.props.questionId;
      axios.put( `http://localhost:8080/qa/questions/${questionId}/helpful` )
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
    var answers = this.state.answers;
    var body = this.props.question.question_body;

    return (
      <div className="container-question-answer">
        <div className="question">Q: {body}</div>

        <Answers answers={answers}/>

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