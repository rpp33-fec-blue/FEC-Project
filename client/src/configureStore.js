import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState.js';

var composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, initialState, composedEnhancer);
export default store;