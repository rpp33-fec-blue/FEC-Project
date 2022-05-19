import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ProductCard from '../../client/src/components/related-products/productCard.jsx';

describe('<ProductCard/>', function() {

  var productCard = shallow(<ProductCard item={[]}/>);

  it('should be selectable by class "product-card"', function() {
    expect(productCard.is('.product-card')).toBe(true);
  });
});