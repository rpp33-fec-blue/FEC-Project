import React from 'react';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';
import ErrorBoundary from '../ErrorBoundary.jsx';

class OutfitToggle extends React.Component {

  // Props: productId, outfit, handleAddOutfit, handleRemoveOutfit

  constructor(props) {
    super(props);

    var inOutfit = false;
    // Unnecessary check if not persisting outfit
    for (var index = 0; index < props.outfit.length; index++) {
      if (props.outfit[index] === this.props.productId) {
        inOutfit = true;
        break;
      }
    }

    this.state = {
      inOutfit: inOutfit
    };

    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  addToOutfit() {
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
        <ErrorBoundary component={'OutfitToggle'}>
        <div className='outfitToggle-component'>
          <button className='outfit-button' onClick={this.removeFromOutfit}><img className='outfit-star' src='/assets/black-star.png'></img></button>
        </div>
        </ErrorBoundary>
      );
    } else {
      return (
        <ErrorBoundary component={'OufitToggle'}>
        <div className='outfitToggle-component'>
          <button className='outfit-button' onClick={this.addToOutfit}><img className='outfit-star' src='/assets/baseline_star_outline_black.png'></img></button>
        </div>
        </ErrorBoundary>
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