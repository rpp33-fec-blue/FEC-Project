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
      <MoreAnsweredQuestions />
      <button type="button">Add a question</button>
    </div>
  );
}

export default Qa;