var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require("react-modal"),
    Signup = require('./components/Signup'),
    Signin = require('./components/Signin'),
    UserActions = require('./actions/userActions'),
    Buttons = require('./components/buttons'),
    UserStore = require('./stores/user_store'),
    BeastForm = require('./components/BeastForm'),
    Beast = require('./components/Beast');

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

var FieldGuide = React.createClass({
  getInitialState: function(){
    return({
      SignUpModalOpen: false,
      SignInModalOpen: false,
      CreateBeastModalOpen: false,
      currentUser: null
    });
  },

  closeModal: function(){
    console.log("Closing User Modal in FieldGuideIndex");
    this.setState({
      SignUpModalOpen: false,
      SignInModalOpen: false,
    });
  },

  closeBeastModal: function(){
    this.setState({
      CreateBeastModalOpen: false
    });
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

  createBeast: function(){
    this.setState({CreateBeastModalOpen: true});
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

  componentDidMount: function(){
    this.storeListener = UserStore.addListener(this.getCurrentUser);
  },

  render: function () {
    var username = this.state.currentUser ? this.state.currentUser.username : null;
    return (
      <div>
        <h1>Field Guide to Fantastic Beasts</h1>
        <div>{username}
          <Buttons
            signed_in={this.state.currentUser}
            signOutCallback={this.handleSignout}
            signUpCallback={this.handleSignup}
            signInCallback={this.handleSignin}/>
          <br />
        </div>

        <button onClick={this.createBeast}>Create Beast</button>


        <Beast />

        <Modal
          isOpen={this.state.SignUpModalOpen}
          onRequestClose={this.closeModal}
          style={style}>
          <Signup />
        </Modal>

        <Modal
          isOpen={this.state.SignInModalOpen}
          onRequestClose={this.closeModal}
          style={style}>
          <Signin />
        </Modal>

        <Modal
          isOpen={this.state.CreateBeastModalOpen}
          onRequestClose={this.closeBeastModal}
          style={style}>
          <BeastForm closeModal={this.closeBeastModal}/>
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
