var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var UserApiUtil = require('../util/user_api_util');


var UserActions = {
  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser(this.receiveCurrentUser);
  },

  createUser: function(data){
    UserApiUtil.createUser(data, this.receiveCurrentUser);
  },

  login: function(loginData){
    UserApiUtil.login(loginData, this.receiveCurrentUser);
  },

  logout: function(){
    UserApiUtil.logout(this.removeCurrentUser);
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
  },

  handleError: function(error) {
		Dispatcher.dispatch({
			actionType: UserConstants.ERROR,
			errors: error.responseJSON.errors
		});
	}
};

module.exports = UserActions;
