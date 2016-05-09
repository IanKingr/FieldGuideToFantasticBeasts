var React = require('react');
var BeastListItem = require('./BeastListItem');

var AffinityBeastList = React.createClass({

  render: function(){
    var beasts = this.props.beasts;
    var itemclass = this.props.itemclass;

    if(beasts){
      beasts = beasts.map(function(beast){
        return <BeastListItem key={beast.id} itemclass={itemclass} beast={beast}/>;
      });
    } else if (itemclass === "SearchListItem"){
      beasts = <div></div>;
    } else {
      beasts = <div className="BeastListItem Center">Select an Affinity Above</div>;
    }

    return (
      <div className={this.props.className}>
        {beasts}
      </div>
    );
  }
});

module.exports = AffinityBeastList;
