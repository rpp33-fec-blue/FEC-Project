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

  onForm () {
    onOverlay("overlay-addAnswer");
  }

  markHelpful () {
    //call API and update number
  }

  render() {
    var answers = this.state.answers;
    var body = this.props.question.question_body;
    var helpfulness = this.props.question.question_helpfulness;

    if (this.state.answers.length === 0) {return null}
    return (
      <div className="container-question-answer">
        <div className="question">Q: {body}</div>

        <Answers answers={answers}/>

        <div className="report-question">
          <span> Helpful? </span>
          <span><a href="#" className="smallLink" onClick={this.markHelpful.bind(this)}> Yes({helpfulness})</a> | </span>
          <span><a href="#" className="smallLink" onClick={this.onForm.bind(this)}>Add Answer</a></span>
        </div>
      </div>
    );
  }
};
export default Question;