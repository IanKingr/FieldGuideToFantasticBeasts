var React = require('react'),
    BeastStore = require('../stores/beast_store'),
    AffinityBeastList = require('../components/AffinityBeastList'),
    AffinityFilterBar = require('./AffinityFilterBar'),
    CreateBeastButton = require('./CreateBeastButton'),
    SearchBar = require('./SearchBar');

var FieldGuideIndex = React.createClass({
  getInitialState: function(){
    return({
      currentBeast:{
      }
    });
  },

  getBeasts: function(){
    console.log("getBeasts [FieldGuideIndex]");
    this.setState({
      beasts: BeastStore.allStored()
    });
  },

  componentDidMount: function(){
    console.log("mounted [FieldGuideIndex]");
    this.beastListener = BeastStore.addListener(this.getBeasts);
  },

  componentWillUnmount: function(){
    console.log("UNMOUNTED [FieldGuideIndex]");
    this.beastListener.remove();
  },

  render: function () {
    return (
      <div className="FieldGuideIndex">
        <SearchBar beasts={this.state.beasts} />
        <CreateBeastButton />
        <AffinityFilterBar />
        <div className="AffinityListHeader AffinityListFooter">&nbsp;</div>
          <AffinityBeastList beasts={this.state.beasts} className="AffinityBeastList AffinityBeastListIndex" itemclass="BeastListItem"/>
        <div className="AffinityListHeader AffinityListFooter">&nbsp;</div>
      </div>
    );
  }
});

module.exports = FieldGuideIndex;
