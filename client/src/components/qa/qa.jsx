import {useSelector, useDispatch} from 'react-redux';
import SearchBar from './searchbar.jsx';
import QuestionList from './questionlist.jsx';
import MoreAnsweredQuestions from './moreansweredquestions.jsx';

var Qa = () => {
  var productId = useSelector((state) => {return state.productId});

  return (
    <div>
      <div>Questions and Answers</div>
      <SearchBar />
      <QuestionList />
      <div>
        <button>MORE ANSWERED QUESTIONS</button>
        <button type="button">Add a question</button>
      </div>
    </div>
  );
}

export default Qa;