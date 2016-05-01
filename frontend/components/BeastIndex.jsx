var React = require('react');
var Beast = require('../components/Beast');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');
var AffinityBeastList = require('../components/AffinityBeastList');

var BeastIndex = React.createClass({
  getInitialState: function(){
    return {
      currentBeast: this.props.beast,
      // currentBeast: {author_id: 1,
      //   name: "Mountain Troll",
      //   description: "A Troll is a magical creature of prodigious strength and little intelligence - a trait which giants seem to have more of.",
      //   avg_height: 150,
      //   avg_weight: 116,
      //   affinity_id: 1
      // }, // this beast object will be passed in as a prop
      beasts: BeastStore.allStored()
    };
  },

  componentDidMount: function(){
    debugger;
    this.beastListener = BeastStore.addListener(this.getBeast);
    // BeastActions.fetchBeasts({affinity_id: this.state.currentBeast.affinity_id });
    // will probably be passed in as a prop or a derived value of a prop from the FieldGuideIndex components
    // BeastActions.fetchBeasts(this.props.);
  },

  componentWillUnmount: function(){
    console.log("BeastIndex UNMOUNTED");
    this.beastListener.remove();
  },

  getBeast: function(){
    console.log("Triggered getBeast callback [BeastIndex]");
    var currentBeast = BeastStore.currentBeast();

    if(currentBeast !== this.state.currentBeast) {
      this.setState({
        // beasts: BeastStore.allStored(),
        currentBeast: currentBeast,
        beasts: BeastStore.allStored()
      });
      console.log("The currentBeast has been stored [BeastIndex]" );
    }
    console.log("But may not have triggered setting currentBeast");
    // console.log(this.state.beasts + " the beasts");
  },

  render: function(){

    // var beasts;
    // if(this.state.beasts){
    //   beasts = this.state.beasts.map(function(beast){
    //       return <li>{beast.name} Affinity: {beast. affinity_id}</li>;
    //   });
    // }
    var currentBeast = this.state.currentBeast;

    console.log("Rendering BeastIndex now with current beast: " + currentBeast);
    return (
      <div className="BeastIndex">
        <AffinityBeastList beasts={this.state.beasts}/>
        <Beast currentBeast={currentBeast}/>
      </div>
    );
  }
});

module.exports = BeastIndex;
