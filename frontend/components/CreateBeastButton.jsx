var React = require('react');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');
var BeastForm = require('./BeastForm');
var Modal = require("react-modal");

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
      CreateBeastModalOpen: false
    };
  },

  closeBeastModal: function(){
    console.log("Closing Beast Modal");
    this.setState({
      CreateBeastModalOpen: false
    });
  },

  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeast);
  },

  getBeast: function(){
    debugger;
    if(!BeastStore.errors){
      this.closeBeastModal();
    } else {
      console.log("getBeast = none [CreateBeast]");
      this.setState({errors: BeastStore.errors});
    }
  },

  createBeast: function(){
    this.setState({CreateBeastModalOpen: true});
  },

  render: function(){

    return (
      <div className="CreateBeastButton">
        <button onClick={this.createBeast}>Create Beast</button>

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

module.exports = CreateBeastButton;
