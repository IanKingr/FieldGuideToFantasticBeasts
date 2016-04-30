var React = require('react');
var BeastStore = require('../stores/beast_store');

var Beast = React.createClass({
  // componentDidMount: function(){
  //   this.beastListener = BeastStore.addListener(this.getCurrentBeast); //won't need this listener once we only have this component mount when a beast is selected
  //   // this.setState({beast: BeastStore.currentBest()});
  // },

  // componentWillUnmount: function(){
  //   this.beastListener.remove();
  // },

  // getCurrentBeast: function(){
  //   //won't need this once we change it so this component only mounts when selected
  //   this.setState({beast: BeastStore.currentBeast()});
  // },

  getInitialState: function(){
    return {
      beast: this.props.currentBeast
    };
  },

  render: function(){
    if(this.state && this.state.beast){
      var beast = this.state.beast;
      
      var beastInfo = <div className="BeastInfo">
        <div className="BeastInfoHeader">
          <h2>{beast.name}</h2>
          <ul>
            <li>Avg Height: {beast.avg_height ? beast.avg_height : "?"} inches</li>
            <li>Avg Length: {beast.avg_length ? beast.avg_length : "?"} inches</li>
            <li>Avg Weight: {beast.avg_weight ? beast.avg_weight : "?"} pounds</li>
          </ul>
        </div>
        <div className="BeastInfoDescription">
          {beast.description}
        </div>
      </div>;
    } else {
      beastInfo = <div></div>;
    }

    return (
      <div className="BeastContainer">
        {beastInfo}
      </div>
    );
  }
});

module.exports = Beast;
