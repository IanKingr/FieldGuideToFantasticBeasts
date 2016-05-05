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

  AnimateOnce: function(event){
    $(event.target).addClass("AnimateOnce");
  },

  render: function(){
    return (
      <div className="AffinityFilterBar">
        <div className="AffinitySorter mountain" onMouseLeave={this.AnimateOnce} onClick={this.getMountainAffinity}>Mountains</div>

        <div className="AffinitySorter water" onMouseLeave={this.AnimateOnce} onClick={this.getWaterAffinity}>Waters</div>

        <div className="AffinitySorter plain" onMouseLeave={this.AnimateOnce} onClick={this.getPlainAffinity}>Plains</div>

        <div className="AffinitySorter forest" onMouseLeave={this.AnimateOnce} onClick={this.getForestAffinity}>Forests</div>
      </div>
    );
  }
});

module.exports = AffinityFilterBar;
