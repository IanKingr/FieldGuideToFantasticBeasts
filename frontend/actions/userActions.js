var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/beast_constants');
var UserApiUtil = require('../util/user_api_util');


var UserActions = {
  createUser: function(data){
    UserApiUtil.createUser(data);
  },

  login: function(loginData){
    UserApiUtil.login(loginData);
  },

  logout: function(){
    UserApiUtil.logout();
  },

  receiveCurrentUser: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  removeCurrentUser: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.REMOVE_USER
    });
  }
};

module.exports = UserActions;
