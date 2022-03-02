// Store
import {connect} from 'react-redux';

// helpers
import {sortedQ, filteredQ, sortedAndFiltered} from './helper.js';
import React from 'react';
import postInteraction from '../../interactions.js';

// Import components
import SearchBar from './searchbar.jsx';
import QuestionList from './questionlist.jsx';
import AddQuestion from './addquestion.jsx'

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

    this.trackInteractions = this.trackInteractions.bind(this);
  }

  trackInteractions(event) {
    postInteraction(event, 'Questions & Answers');
  }

  fetchData() {
    this.setState((prevState) => {
      var sort = sortedQ(this.props.questions);
      var filter = sortedAndFiltered(this.props.questions);
      return {
        sortedQ: sort,
        filteredQ: filter
      }
    })
  }

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props !== prevProps) {
      this.fetchData();
    }
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
    console.log('productId', this.props.productId)
    return (
      <div id="container-qa" className="item-widget-qa" onClick={this.trackInteractions}>
        <h1 className="qa">QUESTIONS & ANSWERS</h1>
        <SearchBar className="search-bar" handleSearch={this.handleSearch.bind(this)} />
        <QuestionList sortedQ={this.state.sortedQ} filteredQ={this.state.filteredQ}/>
        <AddQuestion />
      </div>
    );
  }
}

var mapStateToProps = (state = initialState) => {
  return {
    productId: state.productId,
    questions: state.questions
  }
};

var mapDispatchToProps = (dispatch) => {
  return {

  }
};

var ConnectedQA = connect(mapStateToProps,mapDispatchToProps)(Qa);

export default ConnectedQA;