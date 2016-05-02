var React = require('react');
var Beast = require('../components/Beast');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');
var AffinityBeastList = require('../components/AffinityBeastList');
var BrowserHistory = require('react-router').browserHistory;

window.BeastStore = BeastStore;

var BeastIndex = React.createClass({

  handleClickOnBeast: function(){
    console.log("History Pushing the following beast Id " + this.props.beast.id);

    BrowserHistory.push("/beasts/" + this.props.beast.id);
  },

  componentWillMount: function(){
    console.log("Component Will Mount [BeastIndex]");
    var beastId = parseInt(this.props.params.id);
    // debugger;
    BeastActions.fetchBeast({id: beastId});

    this.setState({
      currentBeast: BeastStore.currentBeast(),
      beasts: BeastStore.allStored()
    });
  },

  componentWillReceiveProps: function(nextProps){
    console.log("Receiving Props [BeastIndex]");
    var beastId = parseInt(this.props.params.id);
    var beast = BeastStore.find(nextProps.params.id);
    // debugger;
    this.setState({
      currentBeast: beast
    });
  },

  componentDidMount: function(){
    console.log("Component Did Mount [BeastIndex]");
    this.beastListener = BeastStore.addListener(this.getBeast);
    // BeastActions.fetchBeasts({affinity_id: this.state.currentBeast}); //Sunday: Need to write this somewhere so we can fetch when we load a page with the url id rather than through the FieldGuideIndex
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
        currentBeast: currentBeast,
        beasts: BeastStore.allStored()
      });
      console.log("The currentBeast has been stored [BeastIndex]" );
    }
    console.log("But may not have triggered setting currentBeast");
    // console.log(this.state.beasts + " the beasts");
  },

  render: function(){
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

window.BeastIndex = BeastIndex;

module.exports = BeastIndex;
