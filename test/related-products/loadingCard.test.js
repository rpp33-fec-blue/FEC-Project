import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoadingCard from '../../client/src/components/related-products/loadingCard.jsx';

describe('<LoadingCard/>', function() {

  console.log(LoadingCard)
  var loadingCard = shallow(<LoadingCard />);

  it('should be selectable by class "product-card"', function() {
    expect(loadingCard.is('.product-card')).toBe(true);
  });

});