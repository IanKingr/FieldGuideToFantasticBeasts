var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require("react-modal"),
    // Signup = require('./components/Signup'),
    // Signin = require('./components/Signin'),
    // UserActions = require('./actions/userActions'),
    // Buttons = require('./components/buttons'),
    // UserStore = require('./stores/user_store'),
    BeastForm = require('./components/BeastForm'),
    Beast = require('./components/Beast'),
    BeastActions = require('./actions/beastActions'),
    BeastStore = require('./stores/beast_store'),
    BeastIndex = require('./components/BeastIndex'),
    AffinityBeastList = require('./components/AffinityBeastList'),
    NavBar = require('./components/NavBar');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var BrowserHistory = require('react-router').browserHistory;


window.BeastActions = BeastActions;
window.BeastStore = BeastStore;

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

// UserActions.fetchCurrentUser();

var FieldGuide = React.createClass({
  getInitialState: function(){
    return({
      // SignUpModalOpen: false,
      // SignInModalOpen: false,
      CreateBeastModalOpen: false,
      // currentUser: null,
      currentBeast:{author_id: 1,
        name: "Mountain Troll",
        description: "A Troll is a magical creature of prodigious strength and little intelligence - a trait which giants seem to have more of.",
        avg_height: 150,
        avg_weight: 116,
        affinity_id: 1
      }
    });
  },
  //
  // closeModal: function(){
  //   console.log("Closing User Modal in FieldGuideIndex");
  //   this.setState({
  //     SignUpModalOpen: false,
  //     SignInModalOpen: false,
  //   });
  // },

  closeBeastModal: function(){
    console.log("Closing Beast Modal");
    this.setState({
      CreateBeastModalOpen: false
    });
  },

  // handleSignin: function(){
  //   console.log("Sign In Clicked");
  //   this.setState({SignInModalOpen: true});
  // },
  //
  // handleSignup: function(){
  //   console.log("Sign Up Clicked");
  //   this.setState({SignUpModalOpen: true});
  // },

  // handleSignout: function(){
  //   console.log("Sign out Clicked");
  //   UserActions.logout();
  // },

  createBeast: function(){
    this.setState({CreateBeastModalOpen: true});
  },
  //
  // getCurrentUser: function(){
  //   this.setState({currentUser: UserStore.currentUser()});
  //   if(this.state.currentUser){
  //     // this.closeModal(); //
  //     console.log("Current User is " + this.state.currentUser.username);
  //   } else {
  //     console.log("getCurrentUser = none");
  //     this.setState({errors: UserStore.errors});
  //   }
  // },

  getMountainAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 1});
  },

  getWaterAffinity: function(){
    BeastActions.fetchBeasts({affinity_id: 2});
  },

  getBeasts: function(){
    this.setState({
      beasts: BeastStore.allStored()
    });
  },

  componentDidMount: function(){

    this.beastListener = BeastStore.addListener(this.getBeasts);
  },

  componentWillUnmount: function(){
    // this.userListener.remove();
    this.beastListener.remove();
  },

  render: function () {
    // var username = this.state.currentUser ? this.state.currentUser.username : null;
    return (
      <div>

        <NavBar />
        <br />

        <button onClick={this.createBeast}>Create Beast</button>

          <div className="MountainSorter" onClick={this.getMountainAffinity}>Mountain</div>

          <div className="WaterSorter" onClick={this.getWaterAffinity}>Water</div>

          <AffinityBeastList beasts={this.state.beasts}/>

          <BeastIndex beast={this.state.currentBeast} />


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
