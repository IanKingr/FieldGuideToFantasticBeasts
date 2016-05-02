var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var BeastActions = require('../actions/beastActions');
var BeastListItem = React.createClass({

  componentWillReceiveProps: function(){
    console.log("ReceivedProps [BeastListItem]");
    this.render();
  },

  handleClick: function(){
    console.log("History Pushing the following beast Id " + this.props.beast.id);

    BrowserHistory.push("/beasts/" + this.props.beast.id);
  },

  render: function(){
    var beast = this.props.beast;
    return (
      <div className="BeastListItem" >
        <div onClick={this.handleClick}>{beast.name}</div>
        <div>#.#</div>
      </div>
    );
  }
});

module.exports = BeastListItem;
