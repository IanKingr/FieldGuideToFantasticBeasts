var React = require('react');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');

var BeastListItem = React.createClass({

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
