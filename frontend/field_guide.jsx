var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require("react-modal"),
    BeastActions = require('./actions/beastActions'),
    BeastIndex = require('./components/BeastIndex'),
    AffinityBeastList = require('./components/AffinityBeastList'),
    NavBar = require('./components/NavBar'),
    AffinityFilterBar = require('./components/AffinityFilterBar'),
    FieldGuideIndex = require('./components/FieldGuideIndex'),
    CreateBeastButton = require('./components/CreateBeastButton'),
    BeastStore = require('./stores/beast_store'),
    BeastForm = require('./components/BeastForm');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var BrowserHistory = require('react-router').browserHistory;


//Windows purely for testing
// window.BeastActions = BeastActions;
// window.BeastStore = BeastStore;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

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
        <li><Link to="/beasts">BeastForm</Link></li>
        <li><Link to="/beasts/1">Beast #1</Link></li>
        <FieldGuideIndex />
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={FieldGuide} />
    <Route path="beasts" component={BeastForm} />
    <Route path="beasts/:id" component={BeastIndex} />
  </Route>
);

// BeastIndex beast={this.state.currentBeast} // need to pass this as a prop somehow in react router

// BrowserHistory

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <Router history={BrowserHistory} routes={routes}/>, root);
});
