import Answer from './answer.jsx';

class Question extends React.Component {


  loadMoreAnswer() {

  }

  render() {
    // var answers = getAnswer(questionID)
    var answers = <Answer />
    //iterate over answer and map to <Answer />

    return (
      <div className="container-question-answer">

        <div className="question">Q: ...</div>

        {answers}

        <div className="report-question">
          <span> Helpful? </span>
          <span> Yes(#) | </span>
          <span> Add Answer</span>
        </div>

        <div className="load-more-answer">
          <button onClick={this.loadMoreAnswer.bind(this)}>LOAD MORE ANSWERS</button>
        </div>
      </div>
    );
  }
};
export default Question;