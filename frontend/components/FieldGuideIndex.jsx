var React = require('react'),
    BeastStore = require('../stores/beast_store'),
    AffinityBeastList = require('../components/AffinityBeastList'),
    AffinityFilterBar = require('./AffinityFilterBar'),
    CreateBeastButton = require('./CreateBeastButton'),
    SearchBar = require('./SearchBar'),
    UserStore = require('../stores/user_store'),
    AffinityDetails = require('./AffinityDetails');

var FieldGuideIndex = React.createClass({
  getInitialState: function(){
    return({
      currentBeast:{},
      signedin: UserStore.currentUser(),
    });
  },

  getBeasts: function(){
    this.setState({
      beasts: BeastStore.allStored(),
      details: BeastStore.details()
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

  setAffinity: function(affinity){
    this.setState({
      affinity: affinity
    });
  },

  render: function () {
    return (
      <div className="FieldGuideIndex">
        <div className="Header">Discover fanastic beasts!</div>
        <SearchBar beasts={this.state.beasts} />
        <CreateBeastButton signedin={this.state.signedin}/>
        <AffinityFilterBar setAffinity={this.setAffinity}/>
        <AffinityDetails affinity={this.state.affinity} details={this.state.details} />
        <div className="AffinityListHeader AffinityListFooter" id="list">&nbsp;</div>
          <AffinityBeastList
            className="AffinityBeastList AffinityBeastListIndex"
            beasts={this.state.beasts}
            itemclass="BeastListItem"/>
        <div className="AffinityListHeader AffinityListFooter" >&nbsp;</div>
        <div className="Footer"></div>
      </div>
    );
  }
});

module.exports = FieldGuideIndex;
