import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import initialState from '../../client/src/initialState.js'
import Comparison from '../../client/src/components/related-products/comparison.jsx';

describe('<Comparison/>', function() {

  const toggleSpy = sinon.spy();
  var comparison = shallow(<Comparison visible={false} toggle={toggleSpy} currentProduct={initialState.productInfo} selectedProduct={initialState.productInfo}/>);

  it('should be selectable by class "comparison-modal"', function() {
    expect(comparison.is('.comparison-modal')).toBe(true);
  });

  it('should trigger the toggle function when it is clicked', function() {
    comparison.find('.comparison-modal').simulate('click');
    expect(toggleSpy).toHaveProperty('callCount', 1);
  })

});