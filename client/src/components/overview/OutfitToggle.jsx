import addOutfit from '../action-creators/addCart.js';
import removeOutfit from '../action-creators/removeCart.js';

const OutfitToggle = ( { selectedStyleId, outfit } ) => {

  // Props: selectedStyleId, outfit

  // If in outfit
  //   Return star that can remove outfit
  // Else
  //   Return star that can add outfit

  return (
    <div></div>
  );
};

export default OutfitToggle;










/*

const OutfitToggle = ( { inOutfit, addOutfit, removeOutfit } ) => {
  if (!inOutfit) {
    return (
      <div>
        <img src='' onClick={this.props.addOutfit}>Empty star</img>
      </div>
    );
  } else {
    return (
      <div>
        <img src='' onClick={this.props.removeOutfit}>Filled star</img>
      </div>
    );
  }
};

export default OutfitToggle;

*/