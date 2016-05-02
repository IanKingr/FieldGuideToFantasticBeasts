var React = require('react');
var BeastActions = require('../actions/beastActions');

var AffinityFilterBar = React.createClass({

  getMountainAffinity: function(){
    console.log("Get Mountain Affinity");
    BeastActions.fetchBeasts({affinity_id: 1});
  },

  getWaterAffinity: function(){
    console.log("Get Water Affinity");
    BeastActions.fetchBeasts({affinity_id: 2});
  },

  getPlainAffinity: function(){
    console.log("Get Plain Affinity");
    BeastActions.fetchBeasts({affinity_id: 3});
  },

  getForestAffinity: function(){
    console.log("Get Forest Affinity");
    BeastActions.fetchBeasts({affinity_id: 4});
  },

  render: function(){
    return (
      <div className="AffinityFilterBar">
        <div className="AffinitySorter mountain" onClick={this.getMountainAffinity}>Mountains</div>

        <div className="AffinitySorter water" onClick={this.getWaterAffinity}>Waters</div>

        <div className="AffinitySorter plain" onClick={this.getPlainAffinity}>Plains</div>

        <div className="AffinitySorter forest" onClick={this.getForestAffinity}>Forests</div>
      </div>
    );
  }
});

module.exports = AffinityFilterBar;
