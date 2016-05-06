var React = require('react');
var Signup = require('./Signup');
var Signin = require('./Signin');
var UserActions = require('../actions/userActions');
var Buttons = require('./buttons');
var UserStore = require('../stores/user_store');
var Modal = require("react-modal");
var Link = require('react-router').Link;

var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex         : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    backgroundColor : '#FFF2E7',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex         : 11
  }
};

UserActions.fetchCurrentUser();

var NavBar = React.createClass({

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.getCurrentUser);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  getInitialState: function(){
    return {
      SignUpModalOpen: false,
      SignInModalOpen: false,
      currentUser: null,
    };
  },

  handleSignin: function(){
    console.log("Sign In Clicked");
    this.setState({SignInModalOpen: true});
  },

  handleSignup: function(){
    console.log("Sign Up Clicked");
    this.setState({SignUpModalOpen: true});
  },

  handleSignout: function(){
    console.log("Sign out Clicked");
    UserActions.logout();
  },


  getCurrentUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
    if(this.state.currentUser){
      this.closeModal();
      console.log("Current User is " + this.state.currentUser.username);
    } else {
      console.log("getCurrentUser = none");
      this.setState({errors: UserStore.errors});
    }
  },

  closeModal: function(){
    console.log("Closing User Modal in FieldGuideIndex");
    this.setState({
      SignUpModalOpen: false,
      SignInModalOpen: false,
    });
  },

  render: function(){
    var username = this.state.currentUser ? this.state.currentUser.username : null;

    return (
      <div className="NavBar">
        <div className="nav">
          <Link to="/" class="active">
            <img className="logo" src="https://res.cloudinary.com/flyingonclouds/image/upload/v1462209268/field_guide_logo4_lrwlzw.png"/>
          </Link>
        <Buttons
          signed_in={this.state.currentUser}
          signOutCallback={this.handleSignout}
          signUpCallback={this.handleSignup}
          signInCallback={this.handleSignin}
          username={username}/>
        </div>

        <Modal
          isOpen={this.state.SignUpModalOpen}
          onRequestClose={this.closeModal}
          className="SignModal">
          <Signup />
        </Modal>

        <Modal
          isOpen={this.state.SignInModalOpen}
          onRequestClose={this.closeModal}
          className="SignModal">
          <Signin />
        </Modal>

      </div>
    );
  }
});

module.exports = NavBar;
