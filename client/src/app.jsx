import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import Qa from './components/qa/qa.jsx';
import OverviewContainer from './containers/OverviewContainer.js';
import ConnectedQA from './components/qa/qa.jsx'
import Rnr from './components/ratings-and-reviews/rnr.jsx';
import RelatedProductsContainer from './containers/relatedProductsContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    var productId = 64620 // need to pull product id from url (using a default product for now)
    this.getPersistedData();
    this.props.handleInitializeState( productId, this.outfit );
    this.display;
  }

  getPersistedData() {
    if(!localStorage.getItem('outfit')) {
      this.outfit = []
    } else {
      this.outfit = JSON.parse(localStorage.getItem('outfit'));
    }
  }

  render() {
    if ( this.props.isLoading ) {
      this.display = <i className="fa fa-spinner fa-spin"></i>
    } else {
      this.display = (
        <div className="container">
          <div className="item-widget-logo">Logo</div>
          <OverviewContainer />
          <RelatedProductsContainer />
          <ConnectedQA />
        </div>
      );
    }

    return (
      this.display
    );
  }
}

export default App;
