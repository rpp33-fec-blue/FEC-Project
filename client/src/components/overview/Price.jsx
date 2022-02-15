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










/*

const Price = ({ selectedStyle }) => {
  if (selectedStyle.sale_price === 0) {
    return (
      <div>
        <h2>${selectedStyle.original_price}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className='salePrice'>${selectedStyle.sale_price + ' '}</h2><h2 className='originalPrice'>${selectedStyle.original_price}</h2>
      </div>
    );
  }
};

export default Price;

*/