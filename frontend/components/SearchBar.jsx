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
    console.log("Search Bar Mounted");
    // this.searchListener = SearchStore.addListener(getResults);
    // this.beastListener = BeastStore.addListener(this.getBeasts);
    BeastActions.fetchAllBeastsForSearch({affinity_id: 0});
  },


  queryChange: function(event){
    console.log("query Changed");
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
    console.log("running filterStore [SearchBar]");
    var results = [];
    var beasts = BeastStore.queryStore();
    // debugger;
    Object.keys(beasts).forEach(function(key){
      if(beasts[key].name.toLowerCase().indexOf(query) !== -1) {
        results.push(beasts[key]);
      }
    });
    return results;
  },


  render: function(){
    console.log("RevewListItem rendering");
    var queryMessage;
    // debugger;
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
