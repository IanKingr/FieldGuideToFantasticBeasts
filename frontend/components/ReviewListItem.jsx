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
    debugger;
    return (
      <div className="ReviewListItem" >
        <div>{review.user}</div>
        <div>Rating: {review.rating}</div>
        <div>{review.description}</div>
      </div>
    );
  }
});

module.exports = ReviewListItem;
