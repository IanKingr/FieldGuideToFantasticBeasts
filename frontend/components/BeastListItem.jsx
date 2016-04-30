var React = require('react');

var BeastListItem = React.createClass({

  componentWillReceiveProps: function(){
    console.log("ReceivedProps [BeastListItem]");
    this.render();
  },

  render: function(){
    var beast = this.props.beast;

    return (
      <div className="BeastListItem">
        <div>{beast.name}</div>
        <div>#.#</div>
      </div>
    );
  }
});

module.exports = BeastListItem;
