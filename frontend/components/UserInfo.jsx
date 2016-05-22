var React = require('react');

var UserInfo = React.createClass({

  render: function(){
    debugger;
    if(this.props && Boolean(this.props.user)){
      var user = this.props.user;

      var userInfo = <div className="BeastInfo">
        <div className="BeastInfoHeader">
          <h2>{user.username}</h2>
          <ul>
            <li>Beasts Liked: {user.liked_beasts.length}</li>
            <li>Reviews: 1</li>
          </ul>
        </div>
      </div>;
    } else {
      userInfo = <div>Nothing</div>;
    }

    return (
      <div className="BeastContainer">
        {userInfo}
      </div>
    );
  }
});

module.exports = UserInfo;
