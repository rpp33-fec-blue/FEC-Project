import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import Qa from './components/qa/qa.jsx';
import OverviewContainer from './containers/OverviewContainer.js';
import ConnectedQA from './components/qa/qa.jsx';
import { useParams } from "react-router-dom";
import RelatedProductsContainer from './containers/relatedProductsContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getPersistedData();
    this.display;
  }

  getPersistedData() {
    if(!localStorage.getItem('outfit')) {
      this.outfit = []
    } else {
      this.outfit = JSON.parse(localStorage.getItem('outfit'));
    }
  }

  componentDidMount () {
    var productId = this.props.params.product_id;
    console.log('id', productId);
    this.props.handleInitializeState( productId, this.outfit );
  }

  render() {
    if ( this.props.isLoading ) {
      this.display = <i className="fa fa-spinner fa-spin"></i>
    } else {
      this.display = (
        <div className="container">
          <div className="item-widget-logo">
            <h5 >Logo</h5>
            <p>SITE WIDE ANNOUNCEMENT MESSAGE! SALE / DISCOUNT OFFER - NEW PRODUCT HIGHTLIGHT</p>
          </div>
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

export default (props) => (
  <App
      {...props}
      params={useParams()}
  />
);
