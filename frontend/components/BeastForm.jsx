var React = require('react');
var BeastActions = require('../actions/beastActions');
var UserStore = require('../stores/user_store');
var BeastStore = require('../stores/beast_store');
var BrowserHistory = require('react-router').browserHistory;

var BeastForm = React.createClass({
  getInitialState: function (){
    return ({ name: "", description: "", errors: "", height: "", length: "", weight: "" });
  },

  getErrors: function(){
    if(BeastStore.errors()){
      this.setState({errors: BeastStore.errors()});
    } else {
      this.props.closeModal();
      BrowserHistory.push("/beasts/"+ BeastStore.currentBeast().affinity_id + "/" + BeastStore.currentBeast().id);
    }
  },

  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getErrors);
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
  },

  nameChange: function (event) {
    var newName = event.target.value;
    this.setState({ name: newName });
  },

  descriptionChange: function (event) {
    var newDescription = event.target.value;
    this.setState({ description: newDescription });
  },

  heightChange: function (event) {
    var newHeight = event.target.value;
    this.setState({ height: newHeight });
  },

  weightChange: function (event) {
    var newWeight = event.target.value;
    this.setState({ weight: newWeight });
  },

  lengthChange: function (event) {
    var newLength = event.target.value;
    this.setState({ length: newLength });
  },

  affinityChange: function (event) {
    var newAffinity = event.target.value;
    this.setState({ affinity_id: newAffinity });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var userId = UserStore.currentUser() ? UserStore.currentUser().id : null;
    var postData = {
      author_id: userId,
      name: this.state.name,
      description: this.state.description,
      avg_height: this.state.height,
      avg_weight: this.state.weight,
      avg_length: this.state.length,
      affinity_id: parseInt(this.state.affinity_id)
    };
    BeastActions.createBeast(postData);
  },

  render: function(){
    var errorDisplay = "";
    if(this.state.errors){
      errorDisplay = this.state.errors.map(function(error){
        return <li key={error}>{error}</li>;
      });
    }
    return (
      <div>
        <h3>Create a Beast</h3>
        <ul className="error">
          {errorDisplay}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>Name<br />
            <input
             type="text"
             value={this.state.name}
             onChange={this.nameChange} />
          </label>
         <br /><br />
         <label>Description<br />
         <textarea
           rows={6}
           cols={50}
           value={this.state.description}
           onChange={this.descriptionChange} />
         </label>
         <br /><br />
         <label>Height (in)<br />
         <input
           type="number"
           value={this.state.height}
           onChange={this.heightChange} />
         </label>
         <br /><br />
         <label>Length (in)<br />
         <input
           type="number"
           value={this.state.length}
           onChange={this.lengthChange} />
         </label>
         <br /><br />
         <label>Weight (lbs)<br />
         <input
           type="number"
           value={this.state.weight}
           onChange={this.weightChange} />
         </label>
         <br /><br />
         <label>Affinity
           <select className="SelectAffinity" onChange={this.affinityChange}>
              <option value=""></option>
              <option value="1">Mountains</option>
              <option value="2">Waters</option>
              <option value="3">Plains</option>
              <option value="4">Forests</option>
           </select>
         </label>
         <br /><br />

          <input className="CreateBeastButton" type="Submit" defaultValue="Create the Beast"/>
        </form>
      </div>
    );
  }
});

module.exports = BeastForm;
