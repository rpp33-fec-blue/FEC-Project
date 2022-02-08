import actionOutfit from '../actions/outfit.js';
import store from '../configureStore.js';

var addOutfit = ( productId ) => {

  return ( dispatch ) => {

    var outfits = store.getState().outfit;
    var index = outfits.indexOf( productId );
    if ( index === -1 ) {
      outfits.push( productId );
    }

    dispatch( actionOutfit( outfits ));
  };
};

export default addOutfit;