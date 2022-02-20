const QuantitySelector = ({ styles, selectedStyleIndex, sku, sizeSelected, quantitySelected, updateQuantitySelected }) => {

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

    return (
      <div>
        <select onChange={updateQuantitySelected}>
          {_.map(validSkuQuantities, (quantity, index) => <option value={quantity} key={index}>{quantity}</option>)}
        </select>
      </div>
    );
  }
};

export default QuantitySelector;