class Answer extends React.Component {

  constructor (props) {
    //props
    //props.answerId
    //props.answer
    super(props);
    this.state = {

    }
  }


  render() {
    var body = this.props.answer.body;
    var answerer_name = this.props.answer.answerer_name;
    var helpfulness = this.props.answer.helpfulness;
    var date = new Date(this.props.answer.date);
    var month = window.months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    console.log({month});

    return (
      <div className="answer">
        <div > A: {body} </div>
        <div>
          <span> by {answerer_name}, {month} {day}, {year} |</span>
          <span> Helpful? </span>
          <span> Yes({helpfulness}) | </span>
          <span> Report </span>
        </div>
      </div>
    );
  }
};

export default Answer;