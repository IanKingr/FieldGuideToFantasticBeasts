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
      <div className={this.props.className}>
        <div className="AffinityListHeader">&nbsp;</div>
        {beasts}
        <div className="AffinityListHeader AffinityListFooter">&nbsp;</div>
      </div>
    );
  }
});

module.exports = AffinityBeastList;
