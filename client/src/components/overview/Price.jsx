const Price = ( { styles, selectedStyleIndex } ) => {

  const price = Number(styles.results[selectedStyleIndex].original_price);
  var salePrice = styles.results[selectedStyleIndex].sale_price;
  if (salePrice !== null) {
    salePrice = Number(salePrice);
  }

  if (salePrice === null || salePrice === 0) {
    return (
      <div>
        <p>Price: ${price}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p><span id="price">Price: ${salePrice} --> </span><span id="salePrice">${price}</span></p>
      </div>
    );
  }
};

export default Price;