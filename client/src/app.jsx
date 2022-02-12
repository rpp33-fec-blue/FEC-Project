import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import ConnectedQA from './components/qa/qa.jsx'
import Rnr from './components/ratings-and-reviews/rnr.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set all initial state in redux store
  }

  render() {
    return (
      <div className="container">
        <div>Hey From React!</div>
        <ConnectedQA className="item-widget-overview"/>
        <Rnr />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);