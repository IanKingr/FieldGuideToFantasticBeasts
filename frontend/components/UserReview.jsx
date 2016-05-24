var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var BeastActions = require('../actions/beastActions');

var UserReview = React.createClass({

  componentWillReceiveProps: function(){
  },

  render: function(){
    var review = this.props.review;

    return (
      <div className="UserReview" >
        <div className="ReviewUser">
          <div>
            {review.beast}
          </div>
          <div>
            Rating: {review.rating}★
          </div>  
        </div>
        <div className="ReviewDescription">{review.description}</div>
      </div>
    );
  }
});

module.exports = UserReview;
