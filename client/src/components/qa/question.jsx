import Answer from './answer.jsx';

class Question extends React.Component {

  render() {
    // var answers = getAnswer(questionID)
    var answers = <Answer />
    //iterate over answer and map to <Answer />

    return (
      <div>
        <div>
          <span> Q: ... </span>
          <span> Helpful? </span>
          <span> Yes(#) | </span>
          <span> Add Answer</span>
        </div>
        <div>{answers}</div>
      </div>
    );
  }
};
export default Question;