var React = require('react');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');

var BeastIndex = React.createClass({
  getInitialState: function(){
    return {
      currentBeast: {author_id: 1,
        name: "Mountain Troll",
        description: "A Troll is a magical creature of prodigious strength and little intelligence - a trait which giants seem to have more of.",
        avg_height: 150,
        avg_weight: 116,
        affinity_id: 1
      } // this beast object will be passed in as a prop
    };
  },

  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeasts);
    BeastActions.fetchBeasts({affinity_id: this.state.currentBeast.affinity_id }); // will probably be passed in as a prop or a derived value of a prop from the FieldGuideIndex components
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
  },

  getBeasts: function(){
    this.setState({beasts: BeastStore.allStored()});
    console.log("The beasts have been stored [BeastIndex]");
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
        <h3>Beasts of Affinity {this.state.currentBeast.affinity_id}</h3>
        {beasts}
      </div>
    );
  }
});

module.exports = BeastIndex;
