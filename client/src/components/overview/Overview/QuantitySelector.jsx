const QuantitySelector = () => {

  // Props: quantitySelected, updateQuantitySelected

  return (
    <div>
      <select onChange={updateQuantitySelected}>
        {/* TO DO - insert available quantities (max = 15) */}
      </select>
    </div>
  );
}
};

export default QuantitySelector;










/*

const QuantitySelector = ( { quantity, updateQuantitySelected} ) => {

    const quantitiesAvailable = [];
    var quantity = 1;
    while (quantity <= quantitiesAvailable && quantity <= 15) {
      quantitiesAvailable.push(quantity);
    }

    return (
      <div>
        <select onChange={updateQuantitySelected}>
          {_.map(quantitiesAvailable, ((quantity)) => <option value={quantity}>{quantity}</option>)}
        </select>
      </div>
    );
  }
};

export default QuantitySelector;

*/

