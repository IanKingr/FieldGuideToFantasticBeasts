var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var BeastConstants = require('../constants/beast_constants');

var BeastStore = new Store(Dispatcher);

var _currentBeast, _errors;
var _beasts = {};

BeastStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BeastConstants.BEAST_RECEIVED:
      console.log("BEAST_RECEIVED [BeastStore]");
    	BeastStore.setCurrentBeast(payload.beast);
      BeastStore.__emitChange();
      break;
    case BeastConstants.BEASTS_RECEIVED:
      console.log("BEASTS_RECEIVED [BeastStore]");
      BeastStore.resetBeasts(payload.beasts);
      BeastStore.__emitChange();
      break;
    case BeastConstants.REMOVE_BEAST:
      console.log("Removing beast from Beast Store");
      BeastStore.__emitChange();
    	// BeastStore.logout();
      break;
    case BeastConstants.ERROR:
      console.log("BEAST_ERROR [BeastStore]");
      BeastStore.resetErrors(payload.errors);
      BeastStore.__emitChange();
      break;
  }
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
  _errors = null;
  _currentBeast = beast;
  BeastStore.addBeast(beast);
};

BeastStore.addBeast = function(beast){
  _beasts[beast.id] = beast;
},

BeastStore.resetBeasts = function(beasts){
  //Need to check and see what form the beasts are passed back as from the JSON. If they are an object or not.
  _beasts = {};

  beasts.forEach(function (beast) {
    _beasts[beast.id] = beast;
  });
};

BeastStore.resetErrors = function(errors){
  _errors = null;
  _errors = errors;
};

BeastStore.errors = function(){
  if (_errors){
    return JSON.parse(_errors.responseText).errors;
  }
};

module.exports = BeastStore;
