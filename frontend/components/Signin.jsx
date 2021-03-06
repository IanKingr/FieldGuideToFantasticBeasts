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
    var username = UserStore.guest().username.split("");
    var password = UserStore.guest().password.split("");
    var time = 50;
    var self = this;

    this.setState({
      username: "",
      password: ""
    });

    username.forEach(function(letter){
      time += 100;
      document.getElementById("usernamebox").focus();
      setTimeout(function() {
        self.setState({
          username: self.state.username + letter
        });
      }, time);
    });

    time += 500;

    password.forEach(function(letter){
      time += 60;
      setTimeout(function() {
        document.getElementById("password").focus();
        self.setState({
          password: self.state.password + letter
        });
      }, time);
    });

    time += 650;

    setTimeout(function(){
      UserActions.login({
        username: UserStore.guest().username,
        password: UserStore.guest().password
      });
    }, time);
  },

  handleSubmit: function (event) {
    if(event){
      event.preventDefault();
    }
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
        return <li key={error}>{error}</li>;
      });
    }
    return (
      <div className="SignUpInForm">
        <div>
          <div>
            <div className="error">
              {errorDisplay}
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>Username<br />
              <input
               type="text"
               id="usernamebox"
               value={this.state.username}
               onChange={this.usernameChange} />
            </label>
           <br /><br />
           <label>Password<br />
           <input
             type="password"
             id="password"
             value={this.state.password}
             onChange={this.passwordChange} />
           </label>
           <br /><br />

            <input className="OrangeButton" type="Submit" value="Sign In" readOnly/>
          </form>
          <button className="OrangeButton GuestSignIn"
            onClick={this.guestSignIn}>Or sign in as a Guest!
          </button>
        </div>
      </div>
    );
  }
});

module.exports = Signin;
