import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RelatedProducts from '../../client/src/components/related-products/relatedProducts.jsx';

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