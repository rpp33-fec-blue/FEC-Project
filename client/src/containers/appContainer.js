import { connect } from 'react-redux';
import App from './../app.jsx';
import initializeState from './../action-creators/initializeState.js';

var AppContainer = ( state ) => {
  return {
    productId: state.productId
  };
};

var AppDispatch = ( dispatch ) => {
  return ( {
    handleInitializeState: ( productId, outfit ) => {
      dispatch( initializeState( productId, outfit ) );
    }
  } );
};

export default connect(AppContainer, AppDispatch)(App);