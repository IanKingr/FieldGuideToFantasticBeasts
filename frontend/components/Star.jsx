var React = require('react');

var Star = React.createClass({
  render: function() {
      var r = 'fa fa-star';
      if(!this.props.selected){
          r += '-o';
        }
        return (
          <i {...this.props} className={r}/>
        );
    }
});

module.exports = Star;
