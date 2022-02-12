import Answers from './answers.jsx';
import {getAnswer} from './helper.js';

class Question extends React.Component {

  constructor(props) {
    super(props);
    //props
    // props.question
    // props.questionId
    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    getAnswer(this.props.questionId, (results) => {
      this.setState({
        answers: results
      })
    });
  }

  render() {
    var answers = this.state.answers;
    var body = this.props.question.question_body;
    var helpfulness = this.props.question.question_helpfulness;

    return (
      <div className="container-question-answer">
        <div className="question">Q: {body}</div>

        <Answers answers={answers}/>

        <div className="report-question">
          <span> Helpful? </span>
          <span> Yes({helpfulness}) | </span>
          <span> Add Answer</span>
        </div>
      </div>
    );
  }
};
export default Question;