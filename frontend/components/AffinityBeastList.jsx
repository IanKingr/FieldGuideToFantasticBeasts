var React = require('react');
var BeastListItem = require('../components/BeastListItem');


var AffinityBeastList = React.createClass({
  componentWillReceiveProps: function(){
    console.log("AffinityBeastList received props and is rendering" + this.props);

    // BeastActions.fetchBeasts({affinity_id: this.props.currentBeast.affinity_id });
    //
    // this.getBeasts();
  },

  // componentDidMount: function(){
    // this.beastListener = BeastStore.addListener(this.getBeasts);

    // console.log("Requesting fetchBeasts [AffinityBeastList]");
    // BeastActions.fetchBeasts({affinity_id: this.props.currentBeast.affinity_id }); // will probably be passed in as a prop or a derived value of a prop from the FieldGuideIndex components
  // },
  //
  // componentWillUnmount: function(){
  //   this.beastListener.remove();
  // },

  // getBeasts: function(){
  //   this.setState({
  //     beasts: BeastStore.allStored(),
  //     // currentBeast: BeastStore.currentBeast()
  //   });
  //   console.log("The beasts have been set to AffinityBeast [AffinityBeast]");
  //   // console.log(this.state.beasts + " the beasts");
  // },

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
        <h3>Related Beasts</h3>
        {beasts}
      </div>
    );
  }
});

module.exports = AffinityBeastList;
