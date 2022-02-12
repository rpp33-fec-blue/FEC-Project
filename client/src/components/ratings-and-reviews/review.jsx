class Review extends React.Component {

  constructor () {
    super();
    this.state = {
      reviewsToShow: 2
    }
  }

  render() {

    return (
    <div className="review">
      <div>extended review summary(if necessary)</div>
      <div>hi, I'm a review</div>
      <div>
        <span> Helpful? </span>
        <span> Yes | </span>
        <span> Report </span>
      </div>
    </div>
    );
  }
};

export default Review;