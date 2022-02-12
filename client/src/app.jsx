import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import ConnectedQA from './components/qa/qa.jsx'
import Rnr from './components/ratings-and-reviews/rnr.jsx';
import RelatedItemsContainer from './containers/relatedItemsContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var outfit = [] // need to determine how save/load this across sessions
    var productId = 64620 // need to pull product id from url (using a default product for now)
    this.props.handleInitializeState( productId, outfit );
  }

  render() {
    return (
      <div className="container">
        <div>Hey From React!</div>
        <ConnectedQA className="item-widget-overview"/>
        <Rnr />
        <RelatedItemsContainer />
      </div>
    );
  }
}

export default App;