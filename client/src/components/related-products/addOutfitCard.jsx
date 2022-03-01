import React from 'react';

class AddOutfitCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='product-card' onClick={this.props.addToOutfit}>
        <div className='add-outfit-container'>
          <div className='default-image-color'></div>
          <div className='card-add-outfit'>+</div>
        </div>
        <div className='card-outfit-info'>
          <div className='card-name'>Add to Outfit</div>
        </div>
      </div>
    );
  }
}

export default AddOutfitCard;