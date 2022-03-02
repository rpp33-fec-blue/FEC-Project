import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/appContainer.js';
import store from './configureStore';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>


          <Route path="/product/:product_id" element={<AppContainer />} />

      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);