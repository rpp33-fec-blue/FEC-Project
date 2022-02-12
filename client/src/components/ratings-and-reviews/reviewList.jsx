import Summary from './reviewSummary.jsx';

class ReviewList extends React.Component {
  constructor () {
    super ();
    this.state = {
      reviewsToShow: 2
    };
  };

  render () {
    var summary = <Summary />
    //iterate over all filtered reviews and return filtered review summaries
    return (
      <div className="rnr-question-list">{summary}</div>
    );
  }
};
export default ReviewList;