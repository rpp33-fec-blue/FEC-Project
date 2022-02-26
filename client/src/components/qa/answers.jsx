import Answer from './answer.jsx';

// List of answers of a Question
class Answers extends React.Component {
  constructor (props) {
    // props
    // props.answers
    super(props)
    this.state = {
      answersToShow: 2,
      remainingAnswer: 0,
      buttonName: "LOAD MORE ANSWERS",
      collapseAnswer: false
    }
  }

  componentDidMount() {
    var answers = this.props.answers;
    var answersLength = answers.length;
    console.log('answers', answers);
    console.log('answersLength', answersLength);
    if (answersLength <= 2) {
      this.setState({
        answersToShow: answersLength,
        remainingAnswer: 0,
        buttonName: ""
      })
    } else if (answersLength > 2) {
      var show = 2;
      this.setState({
        answersToShow: show,
        remainingAnswer: answersLength - show,
        buttonName: "LOAD MORE ANSWERS"
      })
    }

  }

  loadMoreAnswer(e) {
    e.preventDefault;
    var answers = this.props.answers;
    var answersLength = answers.length;

    // COLLAPSE
    if (e.target.innerText === "COLLAPSE ANSWERS") {
      var show = 2;
      this.setState({
        answersToShow: show,
        remainingAnswer: answersLength - show,
        buttonName: "LOAD MORE ANSWERS"
      })
      return;
    }

    // LOAD ANSWERS
    var remainingAnswer = answersLength - this.state.answersToShow ;
    if (remainingAnswer <= 2) {
      // no "more Answer button"
      this.setState((prevState) => {
        return {
          buttonName: "",
          answersToShow: prevState.answersToShow + remainingAnswer
        }
      })

    } else if (remainingAnswer > 2) {
      this.setState((prevState) => {
        return {
          buttonName: "LOAD MORE ANSWERS",
          answersToShow: prevState.answersToShow + 2
        }
      })
    }

    // when the Answer is too long, cap maximum hieght for the Answer & Answer and make it scrollable
  }

  render () {
    if (this.props.answers.length === 0) {return null}

    var button;
    if (this.state.buttonName === "") {
      button = "";
    } else {
      button = <button className="load-more-answer" onClick={this.loadMoreAnswer.bind(this)}>{this.state.buttonName}</button>;
    }

    var toShow = this.props.answers.map((answer, index) => {
      if (index+1 <= this.state.answersToShow) {
        return <Answer answer={answer} answerId={answer.answer_id} key={index}/>
      }
    })

    return (
      <div>
        {toShow}
        {button}
      </div>
    );
  }
}

export default Answers;