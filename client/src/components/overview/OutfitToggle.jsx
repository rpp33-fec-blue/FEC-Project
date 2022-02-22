import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';

class OutfitToggle extends React.Component {

  // Props: productId, outfit, handleAddOutfit, handleRemoveOutfit

  constructor(props) {
    super(props);

    var inOutfit = false;
    // Unnecessary check if not persisting outfit
    for (var index = 0; index < props.outfit.length; index++) {
      if (props.outfit[index] === productId) {
        inOutfit = true;
        break;
      }
    }

    this.state = {
      inOutfit: inOutfit,
    };

    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  addToOutfit() {
    console.log(this.props.handleAddOutfit);
    this.props.handleAddOutfit(this.props.productId);
    this.setState( { inOutfit: true } );
  }

  removeFromOutfit() {
    this.props.handleRemoveOutfit(this.props.productId);
    this.setState( { inOutfit: false } );
  }

  render() {
    if (this.state.inOutfit) {
      return (
        <div className='outfitToggle-component'>
          <button onClick={this.removeFromOutfit}>Remove from outfit</button> {/* TO DO - return shaded star that removes from outfit on click */}
        </div>
      );
    } else {
      return (
        <div className='outfitToggle-component'>
          <button onClick={this.addToOutfit}>Add to outfit</button> {/* TO DO - return empty star that adds to outfit on click */}
        </div>
      );
    }
  }
};

OutfitToggle.propTypes = {
  productId: statePropTypes.productIdPropType,
  outfit: statePropTypes.outfitPropTypes,
  handleAddOutfit: PropTypes.func,
  handleRemoveOutfit: PropTypes.func
};

export default OutfitToggle;