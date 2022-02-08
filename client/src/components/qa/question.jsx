import Answer from './answer.jsx';

class Question extends React.Component {

  render() {
    // var answers = getAnswer(questionID)
    var answers = <Answer />
    //iterate over answer and map to <Answer />

    return (
      <div>
        <div> Q: ... </div>
        <div>{answers}</div>
      </div>
    );
  }
};
export default Question;