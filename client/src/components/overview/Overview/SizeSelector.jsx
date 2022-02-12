const SizeSelector = () => {

  // Props: selectedStyleId, styles, updateSizeSelected

  return (
    <div>
      <select onChange={ updateSizeSelected }>
        {/* TO DO - insert available sizes */}
      </select>
    </div>
  );
};

export default SizeSelector;










/*

const SizeSelector = ( { selectedStyle, sizeSelected, updateSizeSelected} ) => {
  return (
    <div>
      <select onChange={ updateSizeSelected }>
        {_.map(selectedStyle.skus, (sku) => sku.quantity > 0 ? <option value={sku.size}>{sku.size}</option> : null )}
      </select>
    </div>
  );
};

export default SizeSelector;

*/