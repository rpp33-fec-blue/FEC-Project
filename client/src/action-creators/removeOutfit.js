import actionOutfit from '../actions/outfit.js';
import store from '../configureStore.js';

var removeOutfit = ( productId ) => {

  return ( dispatch ) => {

    var outfit = JSON.parse(JSON.stringify(store.getState().outfit));
    var index = outfit.indexOf( productId );
    if ( index > -1 ) {
      outfit.splice( index, 1 );
    }

    localStorage.setItem('outfit', JSON.stringify(outfit));

    dispatch( actionOutfit( outfit ));
  };
};

export default removeOutfit;