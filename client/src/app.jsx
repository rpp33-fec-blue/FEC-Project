import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import Qa from './components/qa/qa.jsx';
import Rnr from './componets/ratings-and-reviews/rnr.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div>Hey From React!</div>
        <Qa className="item-widget-overview"/>
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