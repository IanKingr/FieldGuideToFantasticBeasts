var React = require('react');
var ReviewListItem = require('./ReviewListItem');
var ReviewStore = require('../stores/review_store');

var ReviewList = React.createClass({
  // componentWillReceiveProps: function(){
  //   console.log("ReviewList received props and is rendering" + this.props);
  //
  // },
  getInitialState: function(){
    return ({
      reviews: {}
    });
  },

  componentDidMount: function(){
    console.log("Component Did Mount [ReviewList]");
    this.reviewListener = ReviewStore.addListener(this.getReviews);
  },

  componentWillUnmount: function(){
    console.log("ReviewList UNMOUNTED");
    this.reviewListener.remove();
  },

  getReviews: function(){
    console.log("Triggered getReview callback [ReviewList]");

    if(this.state.reviews !== ReviewStore.allStored()){
      this.setState({
        reviews: ReviewStore.allStored()
      });
      console.log("AllReviews have been stored [ReviewList]" );
    }

    console.log("But may not have triggered setting currentReview or reviews : allStored");
    // console.log(this.state.reviews + " the reviews");
  },

  render: function(){
    console.log("rendering ReviewList");
    var reviews = ReviewStore.allStored();
    // debugger;
    if(reviews){
      reviews = reviews.map(function(review){
        return <ReviewListItem key={review.id} review={review}/>;
      });
    }

    return (
      <div>
        <div className="AffinityListHeader">&nbsp;</div>
        {reviews}
        <div className="AffinityListHeader AffinityListFooter">&nbsp;</div>
      </div>
    );
  }
});

module.exports = ReviewList;
