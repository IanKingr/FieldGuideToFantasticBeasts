var React = require('react');
var ReviewListItem = require('./ReviewListItem');
var ReviewStore = require('../stores/review_store');
var BeastStore = require('../stores/beast_store');
var ReviewActions = require('../actions/reviewActions');
var ReviewForm = require('../components/ReviewForm');

var ReviewList = React.createClass({

  render: function(){
    var reviews = this.props.reviews;
    if(reviews){
      debugger;
      var reviewList = reviews.map(function(review){
        return <ReviewListItem key={review.id} review={review}/>;
      });
    }

    return (
      <div className="ReviewList">
        <div className="ReviewLabel"><h2>Reviews</h2></div>
        <div className="ReviewListHeader">&nbsp;</div>
          <ReviewForm className="ReviewForm"/>
          {reviewList}
        <div className="ReviewListHeader" id="ReviewsFooter">&nbsp;</div>
      </div>
    );
  }
});

module.exports = ReviewList;
