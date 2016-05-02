var React = require('react');
var BeastListItem = require('./BeastListItem');


var AffinityBeastList = React.createClass({
  componentWillReceiveProps: function(){
    console.log("AffinityBeastList received props and is rendering" + this.props);

  },

  render: function(){
    console.log("rendering AffinityBeastList");
    var beasts = this.props.beasts;

    if(beasts){
      beasts = beasts.map(function(beast){
        return <BeastListItem key={beast.id} beast={beast}/>;
      });
    }

    return (
      <div className="AffinityBeastList">
        <div className="AffinityListHeader">Related Beasts</div>
        {beasts}
      </div>
    );
  }
});

module.exports = AffinityBeastList;
