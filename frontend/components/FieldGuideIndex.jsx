var React = require('react'),
    BeastStore = require('../stores/beast_store'),
    AffinityBeastList = require('../components/AffinityBeastList'),
    AffinityFilterBar = require('./AffinityFilterBar'),
    CreateBeastButton = require('./CreateBeastButton');

var FieldGuideIndex = React.createClass({
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
      <div className="FieldGuideIndex">
        <CreateBeastButton />
        <AffinityFilterBar />
        <div className="AffinityListHeader">&nbsp;</div>
          <AffinityBeastList beasts={this.state.beasts} className="AffinityBeastList AffinityBeastListIndex"/>
        <div className="AffinityListHeader AffinityListFooter">&nbsp;</div>
      </div>
    );
  }
});


//AffinityBeastList beasts={this.state.beasts}/>

module.exports = FieldGuideIndex;
