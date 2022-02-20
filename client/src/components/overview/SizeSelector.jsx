const SizeSelector = ( { styles, selectedStyleIndex, sizeSelected, updateSizeSelectedAndSku, updateOutOfStock } ) => {

  const skus = styles.results[selectedStyleIndex].skus;

  var outOfStock = true;
  for (var sku in skus) {
    if (skus[sku].quantity > 0) {
      outOfStock = false;
    }
  }

  if (outOfStock) {
    updateOutOfStock();
    return (
      <div>
        <select disabled>
          <option value='OUT OF STOCK' selected>OUT OF STOCK</option>
        </select>
      </div>
    );
  } else if (sizeSelected === 'Select Size') {
    return (
      <div>
      <select onChange={updateSizeSelectedAndSku}>
        <option value='Select Size'>Select Size</option>
        {_.map(skus, (sku, key) => sku.quantity > 0 ? <option value={sku.size} key={key}>{sku.size}</option> : null )}
      </select>
    </div>
    );
  } else {
    return (
      <div>
        <select onChange={updateSizeSelectedAndSku}>
          {_.map(skus, (sku) => sku.quantity > 0 ? <option value={sku.size} key={key++}>{sku.size}</option> : null )}
        </select>
      </div>
    );
  }
};

export default SizeSelector;