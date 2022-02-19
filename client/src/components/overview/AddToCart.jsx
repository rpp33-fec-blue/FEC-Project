import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartButton from './AddToCartButton.jsx';

const AddToCart = ( { selectedStyleIndex, styles, handleAddCart, sku, sizeSelected, quantitySelected, outOfStock, updateSizeSelectedAndSku, updateQuantitySelected, addToCart, updateOutOfStock } ) => {

  // Props: selectedStyleIndex, styles, handleAddCart, sku, sizeSelected, quantitySelected, outOfStock

  return (
    <div>
      <SizeSelector
        styles={styles}
        selectedStyleIndex={selectedStyleIndex}
        sizeSelected={sizeSelected}
        updateSizeSelectedAndSku={updateSizeSelectedAndSku}
        updateOutOfStock={updateOutOfStock}
      />
      <QuantitySelector
        styles={styles}
        selectedStyleIndex={selectedStyleIndex}
        sku={sku}
        sizeSelected={sizeSelected}
        quantitySelected={quantitySelected}
        updateQuantitySelected={updateQuantitySelected}
      />
      <AddToCartButton
        outOfStock={outOfStock}
        sizeSelected={sizeSelected}
        addToCart={addToCart}
      />
    </div>
  );
};

export default AddToCart;