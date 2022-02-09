import actionOutfit from '../actions/outfit.js';
import store from '../configureStore.js';

var removeOutfit = ( productId ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.

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