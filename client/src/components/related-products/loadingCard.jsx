import React from 'react';

class LoadingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='product-card'>
        <div className='add-outfit-container'>
          <div className='default-image-color'></div>
        </div>
      </div>
    );
  }
}

export default LoadingCard;