class Answer extends React.Component {

  constructor (props) {
    //props
    //props.answerId
    //props.answer
    super(props);
    this.state = {
      helpfulAns: this.props.answer.helpfulness,
      helpfulAnsClicked: false,
      reportAnsClicked: false
    }
  }

  markHelpfulAnswer () {
    if (!this.state.helpfulAnsClicked) {
      var answerId = this.props.answerId;
      axios.put( `http://localhost:8080/qa/answers/${answerId}/helpful` )
        .then(() => {
          this.setState((prevState) => {
            return {
              helpfulAns: prevState.helpfulAns + 1,
              helpfulAnsClicked: true
            }
          })
        })
        .catch();
    }
    // markQuestion(this.props.questionId); Try later when got time
  }

  reportAnswer () {
    if (!this.state.reportAnsClicked) {
      var answerId = this.props.answerId;
      axios.put( `http://localhost:8080/qa/answers/${answerId}/report` )
        .then(() => {
          this.setState((prevState) => {
            return {
              reportAnsClicked: true
            }
          })
        })
        .catch();
    }
    // reportAnswer(answerId); Try later when got time
  }

  render() {
    var body = this.props.answer.body;
    var answerer_name = this.props.answer.answerer_name;
    var date = new Date(this.props.answer.date);
    var month = window.months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var linkHelpful = <a href="#/" className="smallLink" onClick={this.markHelpfulAnswer.bind(this)}> Yes({this.state.helpfulAns}) </a>
    var linkReportAnswer = <a href="#/" className="smallLink" onClick={this.reportAnswer.bind(this)}> Report </a>

    return (
      <div className="answer">
        <div > A: {body} </div>
        <div>
          <span> by {answerer_name}, {month} {day}, {year} |</span>
          <span> Helpful? </span>
          <span>{linkHelpful} | </span>
          <span>{linkReportAnswer} </span>
        </div>
      </div>
    );
  }
};

export default Answer;