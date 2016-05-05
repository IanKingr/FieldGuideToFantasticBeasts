var React = require('react');
var BeastListItem = require('./BeastListItem');


var AffinityBeastList = React.createClass({
  componentWillReceiveProps: function(){
    console.log("AffinityBeastList received props and is rendering" + this.props);

  },

  AnimateOnce: function(event){
    $(event.target).addClass("AnimateOnce");
  },


  render: function(){
    console.log("rendering AffinityBeastList");
    var beasts = this.props.beasts;

    if(beasts){
      beasts = beasts.map(function(beast){
        return <BeastListItem key={beast.id} beast={beast}/>;
      });
    } else {
      beasts = <div className="BeastListItem Center">Select an Affinity Above</div>;
    }

    return (
      <div onMouseLeave={this.AnimateOnce} className={this.props.className}>
        {beasts}
      </div>
    );
  }
});

module.exports = AffinityBeastList;
