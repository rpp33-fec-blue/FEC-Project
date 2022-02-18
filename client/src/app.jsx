import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import Qa from './components/qa/qa.jsx';
import OverviewContainer from './containers/OverviewContainer.js';
import ConnectedQA from './components/qa/qa.jsx'
import Rnr from './components/ratings-and-reviews/rnr.jsx';
import RelatedItemsContainer from './containers/relatedItemsContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    var outfit = [] // need to determine how save/load this across sessions
    var productId = 64620 // need to pull product id from url (using a default product for now)
    this.props.handleInitializeState( productId, outfit );
    this.display;
  }

  componentDidMount() {

  }

  render() {
    if ( this.props.isLoading ) {
      this.display = <i className="fa fa-spinner fa-spin"></i>
    } else {
      this.display = (
        <div className="container">
          <div>Hey From React!</div>
          <OverviewContainer className="widget-overview"/>
          <Rnr />
          <ConnectedQA />
          <RelatedItemsContainer />
        </div>
      );
    }

    return (
      this.display
    );
  }
}

export default App;