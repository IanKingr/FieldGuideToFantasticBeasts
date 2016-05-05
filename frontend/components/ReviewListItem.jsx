var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var BeastActions = require('../actions/beastActions');

var ReviewListItem = React.createClass({

  componentWillReceiveProps: function(){
    console.log("ReceivedProps [ReviewListItem]");
    this.render();
  },

  // handleClick: function(){
  //   console.log("History Pushing the following review Id " + this.props.review.id);
  //   BrowserHistory.push("/beasts/" + this.props.review.affinity_id + "/" + this.props.review.id);
  // },

  render: function(){
    console.log("RevewListItem rendering");
    var review = this.props.review;
    return (
      <div className="ReviewListItem" >
        <div className="ReviewUser">{review.username}</div>
        <div className="ReviewRating">Rating: {review.rating}</div>
        <div className="ReviewDescription">{review.description}</div>
      </div>
    );
  }
});

module.exports = ReviewListItem;
