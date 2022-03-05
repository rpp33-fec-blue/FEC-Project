import React from 'react';
import ProductCard from '../../client/src/components/related-products/productCard.jsx';
import AddOutfitCard from '../../client/src/components/related-products/addOutfitCard.jsx';
import Comparison from '../../client/src/components/related-products/comparison.jsx';
import ProductList from '../../client/src/components/related-products/productList.jsx';
import RelatedProducts from '../../client/src/components/related-products/relatedProducts.jsx';
import { shallow, mount, render } from 'enzyme';

describe('<RelatedProducts/>', function() {
  var relatedProducts = shallow(<RelatedProducts />);

  it('should render without throwing an error', function() {
    expect(relatedProducts.contains(
      <div className='related-products-headers'>RELATED PRODUCTS</div>)).toBe(true);
  });

  it('should be selectable by class "item-widget-related-products"', function() {
    expect(relatedProducts.is('.item-widget-related-products')).toBe(true);
  });

});

describe('<ProductCard/>', function() {

  var productCard = shallow(<ProductCard item={[]}/>);

  it('should be selectable by class "product-card"', function() {
    expect(productCard.is('.product-card')).toBe(true);
  });
});

describe('<AddOutfitCard/>', function() {

  var addOutfitCard = shallow(<AddOutfitCard />);

  it('should be selectable by class "product-card"', function() {
    expect(addOutfitCard.is('.product-card')).toBe(true);
  });
});

describe('<Comparison/>', function() {

  var comparison = shallow(<Comparison currentProduct={{features: []}} selectedProduct={{features: []}}/>);

  it('should be selectable by class "comparison-modal"', function() {
    expect(comparison.is('.comparison-modal')).toBe(true);
  });
});

