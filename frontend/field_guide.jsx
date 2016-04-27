var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require("react-modal"),
    Signup = require('./components/Signup'),
    Signin = require('./components/Signin'),
    UserActions = require('./actions/userActions'),
    Buttons = require('./components/buttons');

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
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex         : 11
  }
};

var FieldGuide = React.createClass({
  getInitialState: function(){
      return({
        SignUpModalOpen: false,
        SignInModalOpen: false,
        SignedIn: false
      });
    },
  closeModal: function(){
    this.setState({ SignUpModalOpen: false, SignInModalOpen: false });
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

  signIn: function(){
    this.setState({SignedIn: true});
    this.closeModal();
  },

  render: function () {

    return (
      <div>
        <h1>FieldGuide</h1>
        <div>
          <Buttons
            signed_in={this.state.SignedIn}
            signOutCallback={this.handleSignout}
            signUpCallback={this.handleSignup}
            signInCallback={this.handleSignin}/>
          <br />
          Experimental Buttons Above
        </div>

        <Modal
          isOpen={this.state.SignUpModalOpen}
          onRequestClose={this.closeModal}
          style={style}>
          <Signup callback={this.signIn}/>
        </Modal>

        <Modal
          isOpen={this.state.SignInModalOpen}
          onRequestClose={this.closeModal}
          style={style}>
          <Signin />
        </Modal>
      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(document.body);
  ReactDOM.render(<FieldGuide/>, root);
});