var React = require('react');
var UserReview = require('./UserReview');

var UserInfo = React.createClass({

  add: function(a, b) {
      return a + b;
  },

  render: function(){
    if(this.props && Boolean(this.props.user)){
      var user = this.props.user;
      var ratings = [];

      var userReviews = user.reviews.map(function(review){
        ratings.push(review.rating);
        return <UserReview key={review.beast} review={review}/>;
      });

      var averageRating = ratings.reduce(this.add, 0)/ratings.length;

      var userInfo =
      <div className="BeastInfo">
        <div className="BeastInfoHeader">
          <h2>{user.username}</h2>
          <ul>
            <li>Reviews: {user.reviews.length}, Average Rating: {averageRating.toFixed(2)}</li>
          </ul>
          <div className="UserReviews">
            {userReviews}
          </div>
        </div>
      </div>;
    } else {
      userInfo = <div></div>;
    }

    return (
      <div className="BeastContainer">
        {userInfo}
      </div>
    );
  }
});

module.exports = UserInfo;
