var React = require('react');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');

var AffinityBeastList = React.createClass({
  getInitialState: function(){
    return {
      beasts: ""
    };
  },


  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeasts);

    console.log("Requesting fetchBeasts [AffinityBeastList]");
    BeastActions.fetchBeasts({affinity_id: this.props.currentBeast.affinity_id }); // will probably be passed in as a prop or a derived value of a prop from the FieldGuideIndex components
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
  },

  getBeasts: function(){
    this.setState({
      beasts: BeastStore.allStored(),
      // currentBeast: BeastStore.currentBeast()
    });
    console.log("The beasts have been stored [AffinityBeast]");
    // console.log(this.state.beasts + " the beasts");
  },

  render: function(){
    var beasts;
    if(this.state.beasts){
      beasts = this.state.beasts.map(function(beast){
          return <li>{beast.name} Affinity: {beast. affinity_id}</li>;
      });
    }


    return (
      <div>
        {beasts}
      </div>
    );
  }
});

module.exports = AffinityBeastList;
