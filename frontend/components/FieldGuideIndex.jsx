var React = require('react'),
    BeastStore = require('../stores/beast_store'),
    AffinityBeastList = require('../components/AffinityBeastList'),
    AffinityFilterBar = require('./AffinityFilterBar'),
    CreateBeastButton = require('./CreateBeastButton'),
    SearchBar = require('./SearchBar'),
    UserStore = require('../stores/user_store');

window.UserStore= UserStore;

var FieldGuideIndex = React.createClass({
  getInitialState: function(){
    return({
      currentBeast:{},
      signedin: UserStore.currentUser(),
    });
  },

  getBeasts: function(){
    this.setState({
      beasts: BeastStore.allStored()
    });
  },

  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeasts);
    this.userListener = UserStore.addListener(this.getUser);
  },

  getUser: function(){
    this.setState({
      signedin: UserStore.currentUser()
    });
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
    this.userListener.remove();
  },

  render: function () {
    return (
      <div className="FieldGuideIndex">
        <div className="Header">Discover fanastic beasts!</div>
        <SearchBar beasts={this.state.beasts} />
        <CreateBeastButton signedin={this.state.signedin}/>
        <AffinityFilterBar />
        <div className="AffinityListHeader AffinityListFooter">&nbsp;</div>
          <AffinityBeastList beasts={this.state.beasts} className="AffinityBeastList AffinityBeastListIndex" itemclass="BeastListItem"/>
        <div className="AffinityListHeader AffinityListFooter">&nbsp;</div>
        <div className="Footer">Footer Goes Here</div>
      </div>
    );
  }
});

module.exports = FieldGuideIndex;
