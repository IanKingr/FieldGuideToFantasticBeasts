var React = require('react');
var ReviewListItem = require('./ReviewListItem');
var ReviewStore = require('../stores/review_store');
var BeastStore = require('../stores/beast_store');
var ReviewActions = require('../actions/reviewActions');
var ReviewForm = require('../components/ReviewForm');

var ReviewList = React.createClass({
  componentWillReceiveProps: function(){
    console.log("ReviewList received props and is rendering" + this.props);
  },

  // getInitialState: function(){
  //   return ({
  //     reviews: null
  //   });
  // },

  // componentDidMount: function(){
  //   console.log("Component Did Mount [ReviewList]");
  //   this.reviewListener = ReviewStore.addListener(this.getReviews);
  // },

  // componentWillUnmount: function(){
  //   console.log("ReviewList UNMOUNTED");
  //   this.reviewListener.remove();
  // },
  //
  // getReviews: function(){
  //   console.log("Triggered getReview callback [ReviewList]");
  //
  //   if(this.state.reviews !== ReviewStore.allStored()){
  //     this.setState({
  //       reviews: ReviewStore.allStored()
  //     });
  //     console.log("AllReviews have been stored [ReviewList]" );
  //   }
  //
  //   console.log("But may not have triggered setting currentReview or reviews : allStored");
  //   // console.log(this.state.reviews + " the reviews");
  // },

  render: function(){
    console.log("rendering ReviewList");
    var reviews = this.props.reviews;
    if(reviews){
      console.log("There are reviews! [ReviewList]");
      // var reviews = beast.reviews;
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
        <div className="ReviewListHeader">&nbsp;</div>
      </div>
    );
  }
});

module.exports = ReviewList;
