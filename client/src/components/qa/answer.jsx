class Answer extends React.Component {

  constructor () {
    super();
    this.state = {
      answersToShow: 2
    }
  }

  loadMoreAnswer() {

  }

  render() {
    return (
      <div>
        <div> A: ... </div>
        <div>
          <span> by User1234, December 21, 2022 |</span>
          <span> Helpful? </span>
          <span> Yes(#) | </span>
          <span> Report </span>
        </div>
        <div>
          <button onClick={this.loadMoreAnswer.bind(this)}>LOAD MORE ANSWERS</button>
        </div>
      </div>
    );
  }
};

export default Answer;