import Answer from './answer.jsx';

// List of answers of a question
class Answers extends React.Component {
  constructor (props) {
    // props
    // props.answers
    super(props)
    this.state = {
      collapseAnswer: false,
      answersToShow: 2,
      remainingAnswer: 0,
      buttonName: "LOAD MORE ANSWERS"
    }
  }

  componentDidMount() {
    // set initial state
    // collapseAnswer: false,
    // answersToShow: if answer is 1, show 1, if more than 1, show 2,
    // remainingAnswer: number of answers - answers to show,
    // buttonName: if answer is more than two, show "LOAD MORE ANSWERS"
  }

  loadMoreAnswer() {
    //COLLAPSE
    // if collapse answer = true
      // change answerToShow to 2
      // change button name to "LOAD MORE ANSWERS"
      // return

    //UPDATE COUNTER
    // if there are more answer to show

      // if more answer to show is 2 or more than 2
        // add 2 to answerToShow state
      // else if more answer to show is 1
        // add 1

    //UPDATE BUTTON NAME
    // if no more answer to show
      // change state collapseAnswer to true

    // if still have more answer to show
      // change state collapseAnswer to true

    // if collapseAnswer is true
      // button name = "COLLAPSE ANSWERS"
    // else if
      // button name = "LOAD MORE ANSWERS"
  }

  render () {
    var toShow = (filteredA, answersToShow) => {
      filteredA.map((answer, index) => {
        if (index+1 <= answersToShow) {
          return <Answer answer={answer} answerId={answer.answer_id} key={index}/>
        }
      })
    }

    return (
      <div>
        {toShow}
        <div className="load-more-answer">
          <button onClick={this.loadMoreAnswer.bind(this)}>{this.state.buttonName}</button>
        </div>
      </div>
    );
  }
}

export default Answers;