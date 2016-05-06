var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var BeastActions = require('../actions/beastActions');
var BeastListItem = React.createClass({

  componentWillReceiveProps: function(){
    // this.render(); //Removed at last minute
  },

  handleClick: function(){

    BeastActions.fetchBeast({id: this.props.beast.id});

    BrowserHistory.push("/beasts/" + this.props.beast.affinity_id + "/" + this.props.beast.id);
  },

  render: function(){
    var beast = this.props.beast;
    var beastimage;
    var average;

    if(beast){
      average = beast.average ? beast.average : "Not Rated";
    }

    if (this.props.itemclass === "SearchListItem") {
      if(beast){
        // var divStyle= {
        //   backgroundImage: 'url('+beast.image_url+')',
        // };
        // beastimage = <div style={divStyle}>&nbsp;</div>;
        // // beastimage = <img src={beast.image_url}></img>;
      } else {
        beastimage = <div className="SearchBeastImage">&nbsp;</div>;
      }
    }

    return (
      <div  onClick={this.handleClick} className={this.props.itemclass} >
        <div className="left">{beast.name}</div>
        <div>{average}</div>
        {beastimage}
      </div>
    );
  }
});

module.exports = BeastListItem;
