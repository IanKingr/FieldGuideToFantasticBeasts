var React = require('react');

var Beast = React.createClass({

  componentWillReceiveProps: function(){
    console.log("ReceivedProps [Beast]" + this.props);
  },

  render: function(){
    console.log("Rendering Beast" + this.props.currentBeast);

    if(this.props && Boolean(this.props.currentBeast)){
      var beast = this.props.currentBeast;
      // var result = "<p>" + beast.description + "</p>";
      // result = result.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
      // result = result.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
      //
      // var temp = document.createElement('div');
      // temp.innerHTML = result;
      // var htmlObject = temp.firstChild;



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
