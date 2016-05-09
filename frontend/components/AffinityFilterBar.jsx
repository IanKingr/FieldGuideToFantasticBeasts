var React = require('react');
var BeastActions = require('../actions/beastActions');

var AffinityFilterBar = React.createClass({

  getMountainAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 1});
    this.props.setAffinity("Mountains");
  },

  getWaterAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 2});
    this.props.setAffinity("Waters");
  },

  getPlainAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 3});
    this.props.setAffinity("Plains");
  },

  getForestAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 4});
    this.props.setAffinity("Forests");
  },

  AnimateOnce: function(event){
    var affinitysorter = event.target.attributes.class.value.indexOf("AffinitySorter");
    if(affinitysorter !== -1){
      $(event.target).addClass("AnimateOnce");
    }
  },

  handleClickonAffinity: function(){
    $('html, body').animate({
       scrollTop: $("#list").offset().top
    }, 2000);
  },

  render: function(){
    return (
      <div className="AffinityFilterBar" onClick={this.handleClickonAffinity} >
        <div className="AffinitySorter mountain" onMouseLeave={this.AnimateOnce} onClick={this.getMountainAffinity}>Mountains</div>

        <div className="AffinitySorter water" onMouseLeave={this.AnimateOnce} onClick={this.getWaterAffinity}>Waters</div>

        <div className="AffinitySorter plain" onMouseLeave={this.AnimateOnce} onClick={this.getPlainAffinity}>Plains</div>

        <div className="AffinitySorter forest" onMouseLeave={this.AnimateOnce} onClick={this.getForestAffinity}>Forests</div>
      </div>
    );
  }
});

module.exports = AffinityFilterBar;
