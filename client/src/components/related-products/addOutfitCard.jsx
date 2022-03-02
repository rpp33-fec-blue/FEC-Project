import React from 'react';

class AddOutfitCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='product-card' onClick={this.props.addToOutfit}>
        <div className='add-outfit-container'>
          <div className='card-add-outfit'>+</div>
          <div className='card-outfit-info'>Add to Outfit</div>
        </div>
      </div>
    );
  }
}

export default AddOutfitCard;