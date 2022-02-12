import Rating from './Rating.jsx';
import ProductOverview from './ProductOverview.jsx';
import Price from './Price.jsx';
import OutfitToggle from './OutfitToggle.jsx';

const ProductInformation = () => {

  // Props: metadata, productInfo, selectedStyle, inOutfit, addOutfit, removeOutfit

  return (
    <div>
      <Rating />
      <h2>{productInfo.name}</h2>
      <h4>{productInfo.category}</h4>
      <ProductOverview />
      <Price />
      <OutfitToggle />
  </div>
  );

};

export default ProductInformation;






/*
const ProductInformation = ({ metadata, productInfo, selectedStyle, inOutfit, addOutfit, removeOutfit }) => {
  return (
    <div>
      <Rating metadata={metadata} />
      <h2>{productInfo.name}</h2>
      <h4>{productInfo.category}</h4>
      <ProductOverview productInfo={productInfo} />
      <Price selectedStyle={selectedStyle} />
      <OutfitToggle inOutfit={inOutfit} addOutfit={addOutfit} removeOutfit={removeOutfit} />
    </div>
  );
}

export default ProductInformation;

*/