const OutfitToggle = ( { productId, outfit, addOutfit, removeOutfit } ) => {

  var inOutfit = false;
  for (var index = 0; index < outfit.length; index++) {
    if (outfit[index] === productId) {
      inOutfit = true;
      break;
    }
  }

  if (inOutfit) {
    return (
      <div>
        <span onClick={removeOutfit}>Remove from outfit</span> {/* TO DO - return full star that can remove outfit */}
      </div>
    );
  } else {
    return (
      <div>
        <span onClick={addOutfit}>Add to outfit</span> {/* TO DO - remove empty star that can add outfit */}
      </div>
    );
  }
};

export default OutfitToggle;