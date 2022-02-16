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
    console.log('props - qa', props);
  }

  componentDidMount () {
    var productId = this.props.productId;
    var questions = this.props.questions.results;

    // Use questions above to create sorted questions and filtered questions
    this.setState({
      sortedQ: sortedQ(questions),
      filteredQ: filteredQ(questions)
    });
  }

  componentWillUnmount () {
    //
  }

  handleSearch(input) {
    // OBJ: set filteredQ state to only have the filtered quesitons
    this.setState({
      filteredQ: filteredQ(this.state.sortedQ, input)
    }, () => {
      this.setState({
        sortedQ: sortedQ(this.state.filteredQ)
      });
    });
  }

  //<QuestionList sortedQ={this.state.sortedQ} filteredQ={this.state.filteredQ}/>
  render () {
    return (
      <div id="container-qa">
        <div>Questions and Answers</div>
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <QuestionList sortedQ={this.state.sortedQ} filteredQ={this.state.filteredQ}/>
        <AddAnAnswer />
      </div>
    );
  }
}

var mapStateToProps = (state = initialState) => {
  console.log('initial state - qa:', initialState);
  return {
    productId: state.productId,
    questions: state.questions
  }
};

var mapDispatchToProps = () => ({

});

var ConnectedQA = connect(mapStateToProps,mapDispatchToProps)(Qa);

export default ConnectedQA;