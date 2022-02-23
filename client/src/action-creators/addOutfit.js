import actionOutfit from '../actions/outfit.js';
import store from '../configureStore.js';

var addOutfit = ( productId ) => {

  return ( dispatch ) => {

    var outfit = JSON.parse(JSON.stringify(store.getState().outfit));
    var index = outfit.indexOf( productId );
    if ( index === -1 ) {
      outfit.push( productId );
    }

    dispatch( actionOutfit( outfit ));
  };
};

export default addOutfit;