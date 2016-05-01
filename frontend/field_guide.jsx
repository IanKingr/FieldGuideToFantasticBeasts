var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require("react-modal"),
    CreateBeastButton = require('./components/CreateBeastButton'),
    BeastActions = require('./actions/beastActions'),
    BeastStore = require('./stores/beast_store'),
    BeastIndex = require('./components/BeastIndex'),
    AffinityBeastList = require('./components/AffinityBeastList'),
    NavBar = require('./components/NavBar'),
    AffinityFilterBar = require('./components/AffinityFilterBar');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var BrowserHistory = require('react-router').browserHistory;

//Windows purely for testing
window.BeastActions = BeastActions;
window.BeastStore = BeastStore;

var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex         : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    backgroundColor : '#FFF2E7',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex         : 11
  }
};

var FieldGuide = React.createClass({
  getInitialState: function(){
    return({
      currentBeast:{author_id: 1,
        name: "Mountain Troll",
        description: "A Troll is a magical creature of prodigious strength and little intelligence - a trait which giants seem to have more of.",
        avg_height: 150,
        avg_weight: 116,
        affinity_id: 1
      }
    });
  },

  getBeasts: function(){
    this.setState({
      beasts: BeastStore.allStored()
    });
  },

  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeasts);
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
  },

  render: function () {
    return (
      <div>
        <NavBar />

          <CreateBeastButton />

          <AffinityFilterBar />

          <AffinityBeastList beasts={this.state.beasts}/>

          <BeastIndex beast={this.state.currentBeast} />

      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(document.body);
  ReactDOM.render(<FieldGuide/>, root);
});
