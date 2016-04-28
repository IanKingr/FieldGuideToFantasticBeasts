var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var BeastConstants = require('../constants/beast_constants');

var BeastStore = new Store(Dispatcher);

var _currentBeast, _errors;
var _beasts = {};

BeastStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BeastConstants.BEAST_RECEIVED:
    	BeastStore.setCurrentBeast(payload.beast);
      break;
    case BeastConstants.BEASTS_RECEIVED:
      BeastStore.resetBeasts(payload.beasts);
      break;
    case BeastConstants.REMOVE_BEAST:
      console.log("Removing beast from Beast Store");
    	// BeastStore.logout();
      break;
    case BeastConstants.ERROR:
      BeastStore.resetErrors(payload.errors);
      break;
  }
  BeastStore.__emitChange();
};

BeastStore.currentBeast = function(){
  if (_currentBeast) {
  	return _currentBeast;
  }
};

BeastStore.find = function(id){
  return _beasts[id]; //check this
};

BeastStore.allStored = function(){
  return Object.keys(_beasts).map(function(key){
    return _beasts[key];
  });
};

BeastStore.setCurrentBeast = function(beast){
  _currentBeast = beast;
};

BeastStore.resetBeasts = function(beasts){
  //Need to check and see what form the beasts are passed back as from the JSON. If they are an object or not.
  _beasts = {};

  beasts.forEach(function (beast) {
    _beasts[beast.id] = beast;
  });
};

BeastStore.resetErrors = function(errors){
  _errors = undefined;
  _errors = errors;
};

BeastStore.errors = function(){
  if (_errors){
    return JSON.parse(_errors.responseText).errors;
  }
};

module.exports = BeastStore;
