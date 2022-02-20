import { connect } from 'react-redux';
import RelatedProducts from './../components/related-products/relatedItems.jsx';
import switchProduct from './../action-creators/switchProduct.js';
import addOutfit from './../action-creators/addOutfit.js';
import removeOutfit from './../action-creators/removeOutfit.js';

var RelatedProductsContainer = ( state ) => {
  return {
    productId: state.productId,
    relatedProducts: state.relatedProducts,
    outfit: state.outfit
  };
};

var RelatedProductsDispatch = ( dispatch ) => {
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

export default connect(RelatedProductsContainer, RelatedProductsDispatch)(RelatedProducts);