var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var BeastActions = require('../actions/beastActions');

var ReviewListItem = React.createClass({

  componentWillReceiveProps: function(){
  },

  render: function(){
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
