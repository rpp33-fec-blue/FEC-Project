import actionOutfit from '../actions/outfit.js';
import store from '../configureStore.js';

var removeOutfit = ( productId ) => {

  return ( dispatch ) => {

    var outfit = store.getState().outfit;
    var index = outfit.indexOf( productId );
    if ( index > -1 ) {
      outfit.splice( index, 1 );
    }

    dispatch( actionOutfit( outfit ));
  };
};

export default removeOutfit;