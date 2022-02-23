import { connect } from 'react-redux';
import OutfitList from './../components/related-products/outfitList.jsx';
import switchProduct from './../action-creators/switchProduct.js';
import addOutfit from './../action-creators/addOutfit.js';
import removeOutfit from './../action-creators/removeOutfit.js';

var RelatedProductsOutfitContainer = ( state ) => {
  return {
    productId: state.productId,
    outfit: state.outfit
  };
};

var RelatedProductsOutfitDispatch = ( dispatch ) => {
  return ( {
    handleSwitchProduct: ( productId ) => {
      dispatch( switchProduct( productId ) );
    },
    handleAddOutfit: ( productId ) => {
      dispatch( addOutfit( productId ) );
    },
    handleRemoveOutfit: ( productId ) => {
      dispatch( removeOutfit( productId ) );
    }
  } );
};

export default connect(RelatedProductsOutfitContainer, RelatedProductsOutfitDispatch)(OutfitList);