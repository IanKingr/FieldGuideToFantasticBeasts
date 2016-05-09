var React = require('react');
var ReviewActions = require('../actions/reviewActions');
var UserStore = require('../stores/user_store');
 //remove if we refactor how we obtain author_id
var BeastStore = require('../stores/beast_store');
var ReviewStore = require('../stores/review_store');
var RatingForm = require('../components/RatingForm');
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


var ReviewForm = React.createClass({
  getInitialState: function (){
    return ({
      description: "",
      rating: null,
      user_id: UserStore.currentUser(),
      beast_id: BeastStore.currentBeast(),
      SignUpModalOpen: false,
      SignInModalOpen: false
    });
  },

  getErrors: function(){
    var errors = ReviewStore.errors();
    this.setState({
      errors: errors,
    });
  },


  _ratingForm: function () {
		var self = this;
		return <RatingForm handleRating={self.handleRating} />;
  },

  handleRating: function (value) {
  	this.setState({rating: value});
  },

  componentDidMount: function(){
    this.reviewListener = ReviewStore.addListener(this.getErrors);
    this.userListener = UserStore.addListener(this.getCurrentUser);
  },

  getCurrentUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
    if(this.state.currentUser){
      this.closeModal();
    }
  },

  componentWillUnmount: function(){
    this.reviewListener.remove();
    this.userListener.remove();
  },

  descriptionChange: function (event) {
    var newDescription = event.target.value;
    this.setState({ description: newDescription });
  },

  ratingChange: function (event) {
    var newRating = event.target.value;
    this.setState({ rating: newRating });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var userId = UserStore.currentUser() ? UserStore.currentUser().id : null;
    //Remove the above line once we implement onEnter for ReactRouter
    var beastId = BeastStore.currentBeast() ? BeastStore.currentBeast().id : null;

    if(userId){
      var postData = {
        user_id: userId, //~maybe pass in as a prop when the add review button is clicked
        beast_id: beastId,
        description: this.state.description,
        rating: parseInt(this.state.rating)
      };
      ReviewActions.createReview(postData);
      this.setState({
        description: "",
        rating: 0,
      });
    } else {
      this.setState({SignInModalOpen: true});
    }
  },

  closeModal: function(){
    this.setState({
      SignInModalOpen: false,
    });
  },

  _errorDisplay: function(){
    if(this.state.errors){
      return this.state.errors.map(function(error){
        if(error === "User has already been taken"){
          error = "You have already submitted a review!";
        }
        return <li key={error}>{error}</li>;
      });
    }
  },

  render: function(){
    return (
      <div className="ReviewForm">
        <form onSubmit={this.handleSubmit} className="ReviewFormSpecific flexoveride">
          <textarea
             className="Description"
             rows={2}
             cols={50}
             value={this.state.description}
             onChange={this.descriptionChange} />

           <label className="SelectRating"> Danger Rating:
            {this._ratingForm()}
          </label>
         <br /><br />

          <input className="OrangeButton Centered" type="Submit" defaultValue="Submit Review"/>
        </form>
        <ul className="error">
          {this._errorDisplay()}
          {this.state.success}
        </ul>

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

module.exports = ReviewForm;
