// Import functions and helpers
// import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {sortedQ, filteredQ} from './helper.js';

// Import components
import SearchBar from './searchbar.jsx';
import QuestionList from './questionlist.jsx';
import AddAnAnswer from './addananswers.jsx'

// Import example state
import initialState from '../../initialState.js';


class Qa extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      sortedQ: [],
      filteredQ: []
    }
    console.log({props});
  }

  componentDidMount () {
    var productId = this.props.productId;
    var questions = this.props.questions;

    // Use questions above to create sorted questions and filtered questions
    this.setState({
      sortedQ: sortedQ(questions),
      filteredQ: filteredQ(questions)
    });
  }

  render () {
    return (
      <div id="container-qa">
        <div>Questions and Answers</div>
        <SearchBar />
        <QuestionList sortedQ={this.state.sortedQ} filteredQ={this.props.questions}/>
        <AddAnAnswer />
      </div>
    );
  }
}

var mapStateToProps = (state = initialState) => {
  console.log({initialState});
  return {
    productId: state.productId,
    questions: state.questions
  }
};

var mapDispatchToProps = () => ({

});

var ConnectedQA = connect(mapStateToProps,mapDispatchToProps)(Qa);

export default ConnectedQA;