const OutfitToggle = ( { inOutfit, addOutfit, removeOutfit } ) => {

  // Props: inOutfit, addOutfit, removeOutfit

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