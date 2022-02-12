import { connect } from 'react-redux';
import Overview from './../components/overview/Overview.jsx';
import addCart from './../action-creators/addCart.js';
import addOutfit from './../action-creators/addOutfit.js';
import removeOutfit from './../action-creators/removeOutfit.js';

var OverviewContainer = ( state ) => {
  return {
    productId: state.productId,
    metadata: state.metadata,
    productInfo: state.productInfo,
    styles: state.styles
  };
};

var OverviewDispatch = ( dispatch ) => {
  return ( {
    handleaddCart: ( skuId, count ) => {
      dispatch( addCart( skuId, count ) );
    },
    handleAddOutfit: ( productId ) => {
      dispatch( addOutfit( productId ) );
    },
    handleRemoveOutfit: ( productId ) => {
      dispatch( removeOutfit( productId ) );
    }
  } );
};

export default connect(OverviewContainer, OverviewDispatch)(Overview);