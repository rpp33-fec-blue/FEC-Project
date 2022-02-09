import Question from './question.jsx';

class QuestionList extends React.Component {

  constructor () {
    super();
    this.state = {
      questionsToShow: 2
    }
  }
  render () {
    // var questions = slice array of object with only the first few count => depends on show and counts state, only iterate according to how much we want
    var questions = <Question />
    // iterate over this.state.questionFiltered // for each question
      // return  <Question quesiton={question}/>

    // *must be in order of helpfulness
    return (
      <div className="item-qa-questionlist">{questions}</div>
    );
  }
};
export default QuestionList;