var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var BeastActions = require('../actions/beastActions');

var BeastListItem = React.createClass({
  handleClick: function(){
    BeastActions.fetchBeast({id: this.props.beast.id});

    BrowserHistory.push("/beasts/" + this.props.beast.affinity_id + "/" + this.props.beast.id);
  },

  render: function(){
    var beast = this.props.beast;
    var item_class = this.props.itemclass;
    var beast_image;
    var average;

    if(beast){
      average = beast.average ? "★" + beast.average : "Not Rated";
    }

    if (item_class === "SearchListItem") {
      if(beast){
        // var divStyle= {
        //   backgroundImage: 'url('+beast.image_url+')',
        // };
        // beast_image = <div style={divStyle}>&nbsp;</div>;
        // beast_image = <img src={beast.image_url}></img>;
      } else {
        beast_image = <div className="SearchBeastImage">&nbsp;</div>;
      }
    }

    return (
      <div  onClick={this.handleClick} className={item_class} >
        <div className="left">{beast.name}</div>
        <div>{average}</div>

        {beast_image}
      </div>
    );
  }
});

module.exports = BeastListItem;
