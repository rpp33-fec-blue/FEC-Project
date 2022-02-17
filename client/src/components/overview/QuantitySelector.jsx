const QuantitySelector = ( { styles, selectedStyleIndex, sku, sizeSelected, quantitySelected, updateQuantitySelected } ) => {

  if (sku === null) {
    return (
      <div>
        <select disabled>
        <option value='-'>-</option>
        </select>
    </div>
    );
  } else {

    var skusAvailable = styles.results[selectedStyleIndex].skus[sku].quantity;
    if (skusAvailable > 15) {
      skusAvailable = 15;
    }
    const validSkuQuantities = [];
    var validSkuQuantity = 1;
    while (validSkuQuantity <= skusAvailable) {
      validSkuQuantities.push(validSkuQuantity);
      validSkuQuantity += 1;
    }

    var key = 1;

    return (
      <div>
        <select onChange={updateQuantitySelected}>
        {_.map(validSkuQuantities, (quantity) => <option value={quantity} key={key++}>{quantity}</option>)}
        </select>
    </div>
    );
  }
};

export default QuantitySelector;