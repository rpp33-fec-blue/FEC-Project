import ReviewProductBreakdown from './reviewProductBreakdown.jsx';

class RatingBreakdown extends React.Component {

  render () {
    return (
      <div id="ratings-breakdown">
        <h1>Ratings and reviews</h1>
        <h2>average Rating goes HERE</h2>
        <div className="avg-review">
          avg review and percentage here
        </div>
        <div id="star-bars">
          ********
          *****************
          ***********
          ******
          *****************
        </div>
        <ReviewProductBreakdown />
      </div>
    )
  }
};

export default RatingBreakdown;

