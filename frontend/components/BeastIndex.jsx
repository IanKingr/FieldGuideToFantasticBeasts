var React = require('react');
var BeastStore = require('../stores/beast_store');

var BeastIndex = React.createClass({
  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeasts);
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
  },

  getBeasts: function(){
    this.setState({beasts: BeastStore.allStored()});
  },

  render: function(){
    return (
      <div>
        <AffinityBeastList beasts={this.state.beasts} />
        <Bookmark />
      </div>
    );
  }
});

module.exports = BeastIndex;
