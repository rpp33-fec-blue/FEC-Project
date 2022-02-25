import React from 'react';
import { shallow } from 'enzyme';

import Overview from '../../client/src/components/overview/Overview.jsx';
import ProductInformation from '../../client/src/components/overview/ProductInformation.jsx';
import Rating from '../../client/src/components/overview/Rating.jsx';
import ProductOverview from '../../client/src/components/overview/ProductOverview.jsx';
import Price from '../../client/src/components/overview/Price.jsx';
import OutfitToggle from '../../client/src/components/overview/OutfitToggle.jsx';
import StyleSelector from '../../client/src/components/overview/StyleSelector.jsx';
import ImageGallery from '../../client/src/components/overview/ImageGallery.jsx';
import DefaultView from '../../client/src/components/overview/DefaultView.jsx';
import ExpandedView from '../../client/src/components/overview/ExpandedView.jsx';
import AddToCart from '../../client/src/components/overview/AddToCart.jsx';
import SizeSelector from '../../client/src/components/overview/SizeSelector.jsx';
import QuantitySelector from '../../client/src/components/overview/QuantitySelector.jsx';
import AddToCartButton from '../../client/src/components/overview/AddToCartButton.jsx';
import ProductFeatures from '../../client/src/components/overview/ProductFeatures.jsx';

import initialState from '../../client/src/initialState.js';

describe('Overview Component', function() {

  describe('When passed props', () => {

    const buildWrapper = (props = {}) => {
      const wrapper = shallow(<Overview {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        productId: initialState.productId,
        productInfo: initialState.productInfo,
        styles: initialState.styles,
        cart: initialState.cart,
        outfit: initialState.outfit,
        handleAddCart: () => {}, // TO DO
        handleAddOutfit: () => {}, // TO DO
        handleRemoveOutfit: () => {}  // TO DO
      };
      wrapper = buildWrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.overview-component');
      expect(nodeWrapper.length).toBe(1);
    });

  });

});

// ProductInformation and subcomponents

describe('ProductInformation Component', function() {

  describe('When passed props', () => {

    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<ProductInformation {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        productId: initialState.productId,
        productInfo: initialState.productInfo,
        metadata: initialState.metadata,
        styles: initialState.styles,
        selectedStyleIndex: 0,
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.productInformation-component');
      expect(nodeWrapper.length).toBe(1);
    });

  });

});

describe('Rating Component', function() {

  describe('When passed props', () => {

    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<Rating {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        metadata: initialState.metadata,
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.rating-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('ProductOverview Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<ProductOverview {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        productInfo: initialState.productInfo,
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.productOverview-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('Price Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<Price {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        styles: initialState.styles,
        selectedStyleIndex: 0
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.price-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('OutfitToggle Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<OutfitToggle {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        productId: initialState.productId,
        outfit: initialState.outfit,
        handleAddOutfit: () => {}, // TO DO
        handleRemoveOutfit: () => {} // TO DO
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.outfitToggle-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

// StyleSelector

describe('StyleSelector Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<StyleSelector {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        styles: initialState.styles,
        selectedStyleIndex: 0,
        updateSelectedStyle: () => {} // TO DO
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.styleSelector-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

// ImageGallery and subcomponents

describe('ImageGallery Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<ImageGallery {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        styles: initialState.styles,
        selectedStyleIndex: 0,
        selectedImageIndex: 0,
        updateSelectedImageIndex: () => {} // TO DO
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('h2');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('DefaultView Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<DefaultView {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        styles: initialState.styles,
        selectedStyleIndex: 0,
        selectedImageIndex: 0,
        updateSelectedImageIndex: () => {},  // TO DO
        updateSelectedStyle: () => {}, // TO DO
        updateDefaultView: () => {}
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.defaultView-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

// describe('ExpandedView Component', function() {

//   it('Should render', function() {
//     const wrapper = shallow(<ExpandedView />);
//     const component = wrapper.find('.expandedView-component');
//     expect(component.length).toBe(1);
//   });

// });

// describe('GalleryIcon Component', function() {

//   it('Should render', function() {
//     const wrapper = shallow(<GalleryIcon />);
//     const component = wrapper.find('.galleryIcon-component');
//     expect(component.length).toBe(1);
//   });

// });

// AddToCart and its subcomponents

describe('AddToCart Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<AddToCart {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        selectedStyleIndex: 0,
        styles: initialState.styles,
        handleAddCart: () => {}, // TO DO
        sku: null,
        sizeSelected: 'Select Size',
        quantitySelected: '-',
        outOfStock: false,
        updateSizeSelectedAndSku: () => {}, // TO DO
        updateQuantitySelected: () => {}, // TO DO
        addToCart: () => {}, // TO DO
        updateOutOfStock: () => {} // TO DO
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.addToCart-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('SizeSelector Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<SizeSelector {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        selectedStyleIndex: 0,
        styles: initialState.styles,
        sizeSelected: 'Select Size',
        updateSizeSelectedAndSku: () => {}, // TO DO
        updateOutOfStock: () => {} // TO DO
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.sizeSelector-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('QuantitySelector Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<QuantitySelector {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        selectedStyleIndex: 0,
        styles: initialState.styles,
        sku: null,
        sizeSelected: 'Select Size',
        quantitySelected: '-',
        updateQuantitySelected: () => {}, // TO DO
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.quantitySelector-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('AddToCartButton Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<AddToCartButton {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        sizeSelected: 'Select Size',
        outOfStock: false,
        addToCart: () => {}, // TO DO
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('.addToCartButton-component');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});

describe('ProductFeatures Component', function() {

  describe('When passed props', () => {
    const buildwrapper = (props = {}) => {
      const wrapper = shallow(<ProductFeatures {...props}/>);
      return wrapper;
    };

    let wrapper;

    beforeEach(() => {
      const props = {
        productInfo: initialState.productInfo
      };
      wrapper = buildwrapper(props);
    });

    it('Should render', function() {
      const nodeWrapper = wrapper.find('p');
      expect(nodeWrapper.length).toBe(1);
    });
  });
});