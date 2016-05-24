var React = require('react');
var BrowserHistory = require('react-router').browserHistory;
var BeastActions = require('../actions/beastActions');
var UserStore = require('../stores/user_store');
var AffinityBeastList = require('./AffinityBeastList');
var BeastStore = require('../stores/beast_store');
var UserActions = require('../actions/userActions');
var UserInfo = require('./UserInfo');


var UserProfile = React.createClass({
  getInitialState: function(){
    return{
      user: undefined,
      beasts: undefined
    };
  },

  getBeasts: function(){
    this.setState({
      beasts: BeastStore.allStored()
    });
  },

  getUser: function(){
    this.setState({
      user: UserStore.currentUser()
    });
  },

  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeasts);
    this.userListener = UserStore.addListener(this.getUser);
    BeastActions.fetchBeasts({liked_beasts: true});
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
    this.userListener.remove();
  },

  render: function(){
    var user = UserStore.currentUser();
    if (user){
      var likedBeasts = user.liked_beasts.length;
    }

    return (
      <div>
        <div className="BeastIndex">
          <div className="BeastIndexInfo">
            <div className="AffinityBeastListBeast">
              <h3>Liked Beasts: {likedBeasts}</h3>
              <div className="AffinityListHeader">&nbsp;</div>
              <AffinityBeastList beasts={this.state.beasts} className="AffinityBeastList"
                itemclass="BeastListItem"/>
              <div className="AffinityListHeader AffinityListFooter"></div>
            </div>
            <UserInfo user={user}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;
