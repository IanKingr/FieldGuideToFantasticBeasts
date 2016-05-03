var React = require('react');
var ReviewActions = require('../actions/reviewActions');
var UserStore = require('../stores/user_store');
 //remove if we refactor how we obtain author_id
var BeastStore = require('../stores/beast_store');
var ReviewStore = require('../stores/review_store');

var ReviewForm = React.createClass({
  getInitialState: function (){
    console.log("Getting InitialState [ReviewForm]");
    return ({
      description: "",
      rating: null,
      user_id: UserStore.currentUser(),
      beast_id: BeastStore.currentBeast()
    });
  },

  getErrors: function(){
    console.log("ReviewStore beckons and ReviewForm stands at the ready");
    var errors = ReviewStore.errors();
    // if(errors){
      this.setState({
        errors: errors,
        // success: ""
      });
    // } else {
    //   this.setState({
    //     success: "Review submitted!"
    //   });
    // }
        // this.setState({errors: ["Review Submitted!"]});
  },

  componentDidMount: function(){
    console.log("ReviewForm component mounting");
    this.reviewListener = ReviewStore.addListener(this.getErrors);
  },

  componentWillUnmount: function(){
    console.log("ReviewForm Unmounting and removing listener");
    this.reviewListener.remove();
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
    var postData = {
      user_id: userId, //~maybe pass in as a prop when the add review button is clicked
      beast_id: beastId,
      description: this.state.description,
      rating: parseInt(this.state.rating)
    };
    ReviewActions.createReview(postData);
  },

  render: function(){
    var errorDisplay = "";
    if(this.state.errors){
      errorDisplay = this.state.errors.map(function(error){
        if(error === "User has already been taken"){ error = "You have already submitted a review!"; }
        return <li>{error}</li>;
      });
    }
    return (
      <div className="ReviewForm">
        <form onSubmit={this.handleSubmit} className="ReviewFormSpecific flexoveride">
          <textarea
             className="Description"
             rows={2}
             cols={50}
             value={this.state.description}
             onChange={this.descriptionChange} />

          <label className="SelectRating">Danger Rating
          <select  onChange={this.ratingChange}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </label>
         <br /><br />

          <input className="OrangeButton Centered" type="Submit" value="Submit Review"/>
        </form>
        <ul className="error">
          {errorDisplay}
          {this.state.success}
        </ul>
      </div>
    );
  }
});

module.exports = ReviewForm;
