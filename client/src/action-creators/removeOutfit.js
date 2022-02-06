import actionOutfit from '../actions/outfit.js';
import store from '../configureStore.js';

var removeOutfit = ( productId ) => { // it would be faster if we pass in the indexes instead of the ids. That way we do not need to loop through the arrays to find them.

  return ( dispatch ) => {

    var outfits = store.getState().outfits;
    var index = outfits.indexOf( productId );
    if ( index > -1 ) {
      outfits.splice( index, 1 );
    }

    dispatch( actionOutfit( outfits ));
  };
};

export default removeOutfit;