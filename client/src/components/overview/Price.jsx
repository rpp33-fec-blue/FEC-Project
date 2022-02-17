const Price = ( { styles, selectedStyleIndex } ) => {

  const price = Number(styles.results[selectedStyleIndex].original_price);
  const salePrice = styles.results[selectedStyleIndex].sale_price;
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
        <span id="price">Price: ${salePrice}</span><span id="salePrice">${price}</span>
      </div>
    );
  }
};

export default Price;