var React = require('react');
var BeastActions = require('../actions/beastActions');

var AffinityFilterBar = React.createClass({

  getMountainAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 1});
  },

  getWaterAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 2});
  },

  render: function(){
    return (
      <div className="AffinityFilterBar">
        <div className="MountainSorter" onClick={this.getMountainAffinity}>Mountain</div>

        <div className="WaterSorter" onClick={this.getWaterAffinity}>Water</div>
      </div>
    );
  }
});

module.exports = AffinityFilterBar;
