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
      filteredQ: [],
      inputSearch: ''
    }
    // console.log('props - qa', props);
  }

  componentDidMount () {
    var productId = this.props.productId;
    var questions = this.props.questions.results;

    this.setState({
      sortedQ: sortedQ(questions),
      filteredQ: filteredQ(questions)
    }, () => {

    });
  }

  handleSearch(input) {

    this.setState({
      inputSearch: input
    }, () => {
      if (this.state.inputSearch.length >= 3) {
        this.setState({
          filteredQ: filteredQ(this.state.sortedQ, input)
        });
      } else if (this.state.inputSearch.length === 0) {
        this.setState({
          filteredQ: this.state.sortedQ
        });
      }
    });
  }


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