import { connect } from 'react-redux';
import RelatedItems from './../components/related-items/relatedItems.jsx';
import switchProduct from './../action-creators/switchProduct.js';
import addOutfit from './../action-creators/addOutfit.js';
import removeOutfit from './../action-creators/removeOutfit.js';

var RelatedItemsContainer = ( state ) => {
  return {
    productId: state.productId,
    outfit: state.outfit
  };
};

var RelatedItemsDispatch = ( dispatch ) => {
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

export default connect(RelatedItemsContainer, RelatedItemsDispatch)(RelatedItems);