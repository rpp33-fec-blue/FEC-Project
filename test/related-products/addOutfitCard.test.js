import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import AddOutfitCard from '../../client/src/components/related-products/addOutfitCard.jsx';

describe('<AddOutfitCard/>', function() {

  const buttonClickEvent = sinon.spy();
  var addOutfitCard = shallow(<AddOutfitCard addToOutfit={buttonClickEvent}/>);

  it('should be selectable by class "product-card"', function() {
    expect(addOutfitCard.is('.product-card')).toBe(true);
  });

  it('should trigger the function add to outfit when clicked', function() {
    addOutfitCard.find('.product-card').simulate('click');
    expect(buttonClickEvent).toHaveProperty('callCount', 1);
  })
});