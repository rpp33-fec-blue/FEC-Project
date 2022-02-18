const AddToCartButton = ( { outOfStock, sizeSelected, addToCart } ) => {

  if (outOfStock) {
    return (
      <div>
        <button hidden disabled>Add To Cart</button>
      </div>
    );
  } else if (sizeSelected === 'Select Size') {
    return (
      <div>
        <button onClick={null}>Add To Cart</button> {/* TO DO - open size selector dropdown and display 'Please select size' above */}
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={addToCart} disabled>Add To Cart</button> {/* Can enable if we're comfortable POSTing to cart API */}
      </div>
    );
  }
};

export default AddToCartButton;