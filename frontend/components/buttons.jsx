var React = require('react');

var Buttons = React.createClass({
  render: function () {
    var buttons;
    if (this.props.signed_in){
        buttons = <button className="OrangeButton" onClick={this.props.signOutCallback}>Sign Out</button>;
    } else {
        buttons = <div>
          <button className="OrangeButton" onClick={this.props.signInCallback}>Sign In</button>
          <button className="OrangeButton" onClick={this.props.signUpCallback}>Sign Up</button>
        </div>;
    }

    return(
      <div className="ButtonsComponent">
        {this.props.username}
        {buttons}
      </div>
    );
  }
});

module.exports = Buttons;
