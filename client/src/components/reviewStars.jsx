import React from 'react';

class ReviewStars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='review-star-holder'>
        <div className='empty-stars'>&#9734;&#9734;&#9734;&#9734;&#9734;</div>
        <div className='full-stars' >&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>
    )
  }
}

export default ReviewStars;