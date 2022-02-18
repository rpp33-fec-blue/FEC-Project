import React from 'react';
import { shallow, mount, render } from 'enzyme';

import RelatedItems from '../../client/src/components/related-items/relatedItems.jsx';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<RelatedItems />).contains(
      <div>RELATED PRODUCTS</div>)).toBe(true);
  });

  it('should be selectable by class "item-widget-related-item"', function() {
    expect(shallow(<RelatedItems />).is('.item-widget-related-item')).toBe(true);
  });

});