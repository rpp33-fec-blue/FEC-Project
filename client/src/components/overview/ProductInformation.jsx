import React from 'react';
import Rating from './Rating.jsx';
import ProductOverview from './ProductOverview.jsx';
import Price from './Price.jsx';
import OutfitToggle from './OutfitToggle.jsx';

const ProductInformation = ( { productId, metadata, productInfo, styles, selectedStyleIndex, outfit, handleAddOutfit, handleRemoveOutfit } ) => {

  return (
    <div>
      <Rating metadata={metadata} />
      <h2>Name: {productInfo.name}</h2>
      <h4>Category: {productInfo.category}</h4>
      <ProductOverview productInfo={productInfo} />
      <Price styles={styles} selectedStyleIndex={selectedStyleIndex} />
      <OutfitToggle
        productId={productId}
        outfit={outfit}
        handleAddOutfit={handleAddOutfit}
        handleRemoveOutfit={handleRemoveOutfit}
      />
  </div>
  );
};

export default ProductInformation;