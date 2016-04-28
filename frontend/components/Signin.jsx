var React = require('react');
var UserActions = require('../actions/userActions');
var UserStore = require('../stores/user_store');

var Signin = React.createClass({
  getInitialState: function (){
    return ({ username: "", password: "", errors: "" });
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
      username: UserStore.guest().username,
      password: UserStore.guest().password
    };
    UserActions.login(postData);
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var postData = {
      username: this.state.username,
      password: this.state.password
    };
    UserActions.login(postData);
  },

  getErrors: function(){
    this.setState({errors: UserStore.errors()});
  },

  componentDidMount: function(){
    this.storeListener = UserStore.addListener(this.getErrors);
  },

  componentWillUnmount: function(){
    this.storeListener.remove();
  },

  render: function(){
    var errorDisplay = "";
    if(this.state.errors){
      errorDisplay = this.state.errors.map(function(error){
        return <li>{error}</li>;
      });
    }
    return (
      <div>
        <ul className="error">
          {errorDisplay}
        </ul>
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

          <input type="Submit" value="Sign In"/>
        </form>
        <br />
        <button className="guest"
          onClick={this.guestSignIn}>Or sign in as a Guest!
        </button>
      </div>
    );
  }
});

module.exports = Signin;
