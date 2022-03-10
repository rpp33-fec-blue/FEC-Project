var { JSDOM } = require( "jsdom" );

import React from 'react';
import SearchBar from '../../client/src/components/qa/SearchBar.jsx';
import initialState from '../../client/src/initialState.js'
import {shallow, mount} from 'enzyme';

var jsdom = new JSDOM("");
var { window } = jsdom;
global.window = window;
global.document = window.document;

describe('<SearchBar/>', () => {
  var searchBar = mount(<SearchBar />);

  it('should have searchQuestion input bar', () => {
    expect(searchBar.find('#searchQuestion')).toHaveLength(1);
  })

  it('should be an input html element', () => {
    expect(searchBar.find('input')).toHaveLength(1);
  })

  it('should have searchQuestion input bar', () => {
    expect(searchBar.find('#searchQuestion')).toHaveLength(1);
  })

});
