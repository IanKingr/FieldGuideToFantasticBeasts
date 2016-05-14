var React = require('react');
var BeastStore = require('../stores/beast_store');
var UserStore = require('../stores/user_store');
var BeastActions = require('../actions/beastActions');
var BeastForm = require('./BeastForm');
var Modal = require("react-modal");
var Signin = require('./Signin');

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


var CreateBeastButton = React.createClass({

  getInitialState: function(){
    return {
      CreateBeastModalOpen: false,
      signedin: this.props.signedin,
      SignUpModalOpen: false,
      SignInModalOpen: false
    };
  },

  closeBeastModal: function(){
    this.setState({
      CreateBeastModalOpen: false
    });
  },

  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeast);
    this.userListener = UserStore.addListener(this.getCurrentUser);
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
    this.userListener.remove();
  },

  getBeast: function(){
    if(!BeastStore.errors){
      this.closeBeastModal();
    } else {
      this.setState({errors: BeastStore.errors});
    }
  },

  getCurrentUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
    if(this.state.currentUser){
      this.closeModal();
    }
  },

  createBeast: function(){
    if(this.props.signedin){
      this.setState({CreateBeastModalOpen: true});
    } else {
      this.setState({SignInModalOpen: true});
    }
  },

  closeModal: function(){
    this.setState({
      SignInModalOpen: false,
    });
  },


  render: function(){

    return (
      <div >
        <button className="OrangeButton" onClick={this.createBeast}>Create Beast</button>

        <Modal
          isOpen={this.state.CreateBeastModalOpen}
          onRequestClose={this.closeBeastModal}
          className="Modal">
          <BeastForm closeModal={this.closeBeastModal}/>
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

module.exports = CreateBeastButton;
