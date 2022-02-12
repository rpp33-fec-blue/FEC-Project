import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './../containers/AppContainer.js';
import store from './configureStore';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);