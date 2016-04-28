var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(Dispatcher);

var _currentUser, _errors;

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
    	UserStore.login(payload.user);
      break;
    case UserConstants.REMOVE_USER:
      console.log("Removing user from User Store");
    	UserStore.logout();
      break;
    case UserConstants.ERROR:
      UserStore.resetErrors(payload.errors);
      break;
  }
  UserStore.__emitChange();
};

UserStore.guest = function(){
  console.log("Guest login activated!");
  return {username: "GuestUser", password: "beourGuest2theTest"};
};

UserStore.login = function(user){
  console.log("UserStore logging in " + user.username);
	_currentUser = user;
  _errors = null;
};

UserStore.logout = function(){
  _currentUser = null;
  _errors = null;
};

UserStore.currentUser = function(){
  if (_currentUser) {
  	return _currentUser;
  }
};

UserStore.resetErrors = function(errors){
  _errors = undefined;
  _errors = errors;
};

UserStore.errors = function(){
  if (_errors){
    return JSON.parse(_errors.responseText).errors;
  }
};

module.exports = UserStore;
