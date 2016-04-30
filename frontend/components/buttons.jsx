var React = require('react');

var Buttons = React.createClass({
  render: function () {
    var buttons;
    if (this.props.signed_in){
        buttons = <button onClick={this.props.signOutCallback}>Sign Out</button>;
    } else {
        buttons = <div>
          <button onClick={this.props.signInCallback}>Sign In</button>
          <button onClick={this.props.signUpCallback}>Sign Up</button>
        </div>;
    }

    return(
      <div>
        {this.props.username}
        {buttons}
      </div>
    );
  }
});

module.exports = Buttons;
