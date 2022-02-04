import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

var composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, composedEnhancer);
export default store;