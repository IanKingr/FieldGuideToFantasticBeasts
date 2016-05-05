var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var BeastConstants = require('../constants/beast_constants');

var BeastStore = new Store(Dispatcher);

var _currentBeast = [];
var _errors;
var _beasts = {};
var _searchbeasts = {};

BeastStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BeastConstants.BEAST_RECEIVED:
      console.log("BEAST_RECEIVED [BeastStore]");
    	BeastStore.setCurrentBeast(payload.beast);
      BeastStore.__emitChange();
      break;
    case BeastConstants.CREATED_BEAST_RECEIVED:
      console.log("CREATED_BEAST_RECEIVED [BeastStore]");
      BeastStore.setCurrentBeast(payload.beast);
      BeastStore.__emitChange();
      break;
    case BeastConstants.BEASTS_RECEIVED:
      console.log("BEASTS_RECEIVED [BeastStore]");
      BeastStore.resetBeasts(payload.beasts);
      BeastStore.__emitChange();
      break;
    case BeastConstants.ALL_BEASTS_RECEIVED:
      console.log("ALL_BEASTS_RECEIVED [BeastStore]");
      BeastStore.searchStoreBeasts(payload.beasts);
      // BeastStore.__emitChange();
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
  if (_currentBeast[0]) {
  	return _currentBeast.slice()[0];
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
  _currentBeast[0] = beast;
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

//Will be depricated when we switch to single store
BeastStore.searchStoreBeasts = function(beasts){
  _searchbeasts = {};

  beasts.forEach(function (beast) {
    _searchbeasts[beast.id] = beast;
  });
};

BeastStore.queryStore = function(){
  return Object.keys(_searchbeasts).map(function(key){
    return _searchbeasts[key];
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
