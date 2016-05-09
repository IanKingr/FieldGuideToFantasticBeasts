var React = require('react');
var BrowserHistory = require('react-router').browserHistory;

var AffinityDetails = React.createClass({

  getDetails: function(){
    var average;
    var bestBeast;
    var totalBeasts;
    var details;
    // var details = this.props.details;
    if(this.props.details){
      var average = "★" + this.props.details.queryAverage;
      var bestBeast = this.props.details.bestBeast;
      var totalBeasts = this.props.details.totalBeasts;

      details =
      <div className="AffinityInfoItems">
        <div>
          <div>Total Beasts: {totalBeasts}</div>
          <div>Average: {average}</div>
        </div>
        <div className="AffinityInfoHeader">{this.props.affinity}</div>
        <div>
          <div>Highest Rated:</div>
          <div>{bestBeast}</div>
        </div>
      </div>;
    } else {
      details = <div></div>;
    }

    return (
      <div className="AffinityInfoBox">
        {details}
      </div>
    );
  },

  render: function(){

    return (
      <div>
        {this.getDetails()}
      </div>
    );
  }
});

module.exports = AffinityDetails;
