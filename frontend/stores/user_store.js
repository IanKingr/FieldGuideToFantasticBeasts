var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');
var LikeConstants = require('../constants/like_constants');

var UserStore = new Store(Dispatcher);

var _currentUser, _errors;

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      debugger;
    	UserStore.login(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.REMOVE_USER:
    	UserStore.logout();
      UserStore.__emitChange();
      break;
    case UserConstants.ERROR:
      UserStore.resetErrors(payload.errors);
      UserStore.__emitChange();
      break;
    case LikeConstants.LIKE_RECEIVED:
      UserStore.addLike(payload.like.beastId);
      UserStore.__emitChange();
      break;
    case LikeConstants.LIKE_REMOVED:
      UserStore.removeLike(payload.like.beastId);
      UserStore.__emitChange();
      break;
  }
};

UserStore.guest = function(){
  return {username: "Planeswalker1", password: "letsgoOnAnAdventure"};
};

UserStore.addLike = function(beastId) {
  _currentUser.liked_beasts.push(parseInt(beastId));
};

UserStore.removeLike = function(beastId) {
  var beastIdx = _currentUser.liked_beasts.indexOf(parseInt(beastId));
  _currentUser.liked_beasts.splice(beastIdx, 1);
};

UserStore.login = function(user){
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

window.UserStore = UserStore;

module.exports = UserStore;
