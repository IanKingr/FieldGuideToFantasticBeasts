var React = require('react');
var UserActions = require('../actions/userActions');

var Signup = React.createClass({
  getInitialState: function (){
    return ({ username: "", password: "" });
  },

  usernameChange: function (event) {
    var newUsername = event.target.value;
    this.setState({ username: newUsername });
  },

  passwordChange: function (event) {
    var newPassword = event.target.value;
    this.setState({ password: newPassword });
  },

  guestSignIn: function(event) {
    console.log("Guest sign in clicked");
    var postData = {
      username: this.state.username,
      password: this.state.password
    };
    UserActions.login(postData);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var postData = {
      username: this.state.username,
      password: this.state.password
    };
    UserActions.createUser(postData);
    this.props.callback();
    this.setState({ username: "", password: "" });
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username<br />
            <input
             type="text"
             value={this.state.username}
             onChange={this.usernameChange} />
          </label>
         <br /><br />
         <label>Password<br />
         <input
           type="password"
           value={this.state.password}
           onChange={this.passwordChange} />
         </label>
         <br /><br />

          <input type="Submit" value="Create Account"/>
        </form>
        <button className="guest" onClick={this.guestSignIn}>Or sign in as a Guest!</button>
      </div>
    );
  }
});

module.exports = Signup;
