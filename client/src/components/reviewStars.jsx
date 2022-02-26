import React from 'react';

class ReviewStars extends React.Component {
  constructor(props) {
    super(props);
  }

  calculatePercentOfFullStars() {
    var sum = 0;
    var count = 0;

    Object.keys(this.props.ratings).forEach((key) => {
      count += Number(this.props.ratings[key]);
      sum += key*this.props.ratings[key];
    });

    var roundedValue = Math.round(((sum/count)*4))/4;

    if (count === 0) {
      return '100%'
    }
    return (roundedValue/5*100) + '%';
  }

  render() {

    var percentOfFullStars = this.calculatePercentOfFullStars();

    return (
      <div className='review-star-holder'>
        <div className='empty-stars'>&#9734;&#9734;&#9734;&#9734;&#9734;</div>
        <div className='full-stars' style={ {width: percentOfFullStars} }>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>
    )
  }
}

export default ReviewStars;