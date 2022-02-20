import React from 'react';

class AddOutfitCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='product-card' onClick={this.props.addToOutfit}>
        <div className='add-outfit-container'>
          <img className='card-info card-photo' src='./assets/light-grey.jpg'></img>
          <div className='card-add-outfit'>+</div>
        </div>
      </div>
    );
  }
}

export default AddOutfitCard;