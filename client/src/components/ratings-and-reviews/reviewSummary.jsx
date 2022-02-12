import Review from './review.jsx';

class Summary extends React.Component {

  loadAdditionalReviews() {

  }


  render () {
    var reviews = <Review />

    return (
    <div className="reviews-container">

      <div className="summary">SUMMARY GOES HERE</div>

      {reviews}

      <div className="review-timestamp">
        <span>username1234</span>
        <span>this is a random date 22, 1892</span>
      </div>

      <div className="more-reviews">
        <button onClick={this.loadAdditionalReviews.bind(this)}>MOAR reviews</button>
      </div>
    </div>
    );
  }
};

export default Summary;