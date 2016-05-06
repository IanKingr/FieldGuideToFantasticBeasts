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

    BeastActions.fetchBeast({id: this.props.beast.id});

    BrowserHistory.push("/beasts/" + this.props.beast.affinity_id + "/" + this.props.beast.id);
  },

  render: function(){
    var beast = this.props.beast;
    var beastimage;
    if (this.props.itemclass === "SearchListItem") {
      beastimage = <div className="SearchBeastImage">&nbsp;</div>;
    }

    return (
      <div  onClick={this.handleClick} className={this.props.itemclass} >
        <div className="left">{beast.name}</div>
        <div>Not rated</div>
        {beastimage}
      </div>
    );
  }
});

module.exports = BeastListItem;
