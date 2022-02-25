import React from 'react';

class ReviewStars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='review-star-holder'>
        <div>
          <div className='empty-stars'></div>
          <div className='full-stars'></div>
        </div>
        <div>
          <img className='review-star-icon review-star-empty' src='./assets/baseline_star_outline_black.png'></img>
          <img className='review-star-icon review-star-full' src='./assets/black-star.png'></img>
        </div>
        <div>
          <img className='review-star-icon review-star-empty' src='./assets/baseline_star_outline_black.png'></img>
          <img className='review-star-icon review-star-full' src='./assets/black-star.png'></img>
        </div>
        <div>
          <img className='review-star-icon review-star-empty' src='./assets/baseline_star_outline_black.png'></img>
          <img></img>
        </div>
        <div>
          <img className='review-star-icon review-star-empty' src='./assets/baseline_star_outline_black.png'></img>
          <img></img>
        </div>
      </div>
    )
  }
}

export default ReviewStars;