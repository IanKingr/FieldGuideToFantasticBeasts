var React = require('react');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');
var AffinityBeastList = require('../components/AffinityBeastList');

var SearchBar = React.createClass({

  getInitialState: function(){
    return({
      query: "",
      beasts: "",
    });
  },

  componentDidMount: function(){
    BeastActions.fetchAllBeastsForSearch({affinity_id: 0});
  },


  queryChange: function(event){
    event.preventDefault();
    var results;
    if(event.target.value){
      results = this.filterStore(event.target.value);
    }

    this.setState({
      query: event.target.value.toLowerCase(),
      beasts : results
    });
  },

  filterStore: function(query){
    var results = [];
    var beasts = BeastStore.queryStore();

    Object.keys(beasts).forEach(function(key){
      if(beasts[key].name.toLowerCase().indexOf(query) !== -1) {
        results.push(beasts[key]);
      }
    });
    return results;
  },


  render: function(){
    var queryMessage;

    if(!this.state.query){
      queryMessage = "Please enter a mythical beast's name here";
    }

    return (
      <div className="SearchContainer" >
        <input className="SearchBar" onChange={this.queryChange} type="text" value={this.state.query}></input>
        <AffinityBeastList beasts={this.state.beasts} itemclass={"SearchListItem"} className="SearchResultList"/>
      </div>
    );
  }
});

module.exports = SearchBar;
