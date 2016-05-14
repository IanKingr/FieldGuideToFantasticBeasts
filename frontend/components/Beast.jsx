var React = require('react');

var Beast = React.createClass({

  convertInToFt: function(inches){
    return (inches/12).toFixed(2);
  },

  render: function(){
    if(this.props && Boolean(this.props.currentBeast)){
      var beast = this.props.currentBeast;
      // var result = "<p>" + beast.description + "</p>";
      // result = result.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>");
      // result = result.replace(/\r\n/g, "<br />").replace(/\n/g, "<br />");
      //
      // var temp = document.createElement('div');
      // temp.innerHTML = result;
      // var htmlObject = temp.firstChild;

      var height = beast.avg_height ? beast.avg_height : "?";
      height = height > 12 ? this.convertInToFt(height) + " ft" : height + " inches";

      var length = beast.avg_length ? beast.avg_length : "?";
      length = length > 12 ? this.convertInToFt(length) + " ft" : length + " inches";

      var weight = beast.avg_weight ? beast.avg_weight : "?";
      weight = weight > 2000 ? (weight/2204.6).toFixed(2) + " tons" : weight + " pounds";

      var beastInfo = <div className="BeastInfo">
        <div className="BeastInfoHeader">
          <h2>{beast.name}</h2>
          <ul>
            <li>Avg Height: {height}</li>
            <li>Avg Length: {length}</li>
            <li>Avg Weight: {weight}</li>
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
