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
      <div className="FieldGuide">
        <FieldGuideIndex />
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={FieldGuide} />
    <Route path="beasts/:affinity_id/:id" component={BeastIndex} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(document.body);
  ReactDOM.render(
    <Router history={BrowserHistory} routes={routes}/>, root);
});
