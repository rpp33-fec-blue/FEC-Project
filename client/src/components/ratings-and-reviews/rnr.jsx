import React from 'react';
// import reviewSearchBar from './reviewSearchBar.jsx'; //low priority
import {useSelector} from 'react-redux';
import ReviewList from './reviewList.jsx';
import RatingBreakdown from './ratingBreakdown.jsx';
var Rnr = () => {
  var productID = useSelector((state) => {
    return state.productID
  });

  return (
    <div id="reviews-container">
      <div>Hi, I'm the ratings and reviews component.</div>
      <RatingBreakdown />
      <ReviewList />
      <div>
        <button>more reviews</button>
        <button>add a review +</button>
      </div>
    </div>
  );
}

export default Rnr;