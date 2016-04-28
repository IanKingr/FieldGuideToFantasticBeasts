var React = require('react');
var BeastActions = require('../actions/beastActions');
var UserStore = require('../stores/user_store'); //remove if we refactor how we obtain author_id
var BeastStore = require('../stores/beast_store');

var BeastForm = React.createClass({
  getInitialState: function (){
    return ({ name: "", description: "" });
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
    var postData = {
      author_id: UserStore.currentUser().id, //~maybe pass in as a prop when the add beast button is clicked
      name: this.state.name,
      description: this.state.description,
      avg_height: this.state.height,
      avg_weight: this.state.weight,
      avg_length: this.state.length,
      affinity_id: parseInt(this.state.affinity_id)
    };
    BeastActions.createBeast(postData);
    // this.props.callback();
    // this.setState({ name: "", description: "" });
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name<br />
            <input
             type="text"
             value={this.state.name}
             onChange={this.nameChange} />
          </label>
         <br /><br />
         <label>Description<br />
         <input
           type="textarea"
           value={this.state.description}
           onChange={this.descriptionChange} />
         </label>
         <br /><br />
         <label>Height<br />
         <input
           type="text"
           value={this.state.height}
           onChange={this.heightChange} />
         </label>
         <br /><br />
         <label>Weight<br />
         <input
           type="text"
           value={this.state.weight}
           onChange={this.weightChange} />
         </label>
         <br /><br />
         <label>Length<br />
         <input
           type="text"
           value={this.state.length}
           onChange={this.lengthChange} />
         </label>
         <br /><br />
         <label>Affinity
           <select onChange={this.affinityChange}>
              <option></option>
              <option value="1">Mountains</option>
              <option value="2">Waters</option>
              <option value="3">Plains</option>
              <option value="4">Forests</option>
           </select>
         </label>
         <br /><br />

          <input type="Submit" value="Create the Beast"/>
        </form>
      </div>
    );
  }
});

module.exports = BeastForm;
