const Price = ( { styles, selectedStyleId } ) => {

  // Props: styles, selectedStyleId

  // TO DO - obtain selected style

  return (
    <div></div>
    // If sale price equals 0
    //   Return original price
    // Else
    //   Return sale price (in red) and original price (crossed out)
  );
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