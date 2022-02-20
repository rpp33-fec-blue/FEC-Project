import React from 'react';
import { shallow, mount, render } from 'enzyme';

import RelatedProducts from '../../client/src/components/related-products/relatedProducts.jsx';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<RelatedProducts />).contains(
      <div>RELATED PRODUCTS</div>)).toBe(true);
  });

  it('should be selectable by class "item-widget-related-item"', function() {
    expect(shallow(<RelatedProducts />).is('.item-widget-related-item')).toBe(true);
  });

});