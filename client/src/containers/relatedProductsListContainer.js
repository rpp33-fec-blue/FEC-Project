import { connect } from 'react-redux';
import ProductList from './../components/related-products/productList.jsx';
import switchProduct from './../action-creators/switchProduct.js';

var RelatedProductsListContainer = ( state ) => {
  return {
    productId: state.productId,
    relatedProducts: state.relatedProducts,
    productInfo: state.productInfo
  };
};

var RelatedProductsListDispatch = ( dispatch ) => {
  return ( {
    handleSwitchProduct: ( productId ) => {
      dispatch( switchProduct( productId ) );
    }
  } );
};

export default connect(RelatedProductsListContainer, RelatedProductsListDispatch)(ProductList);