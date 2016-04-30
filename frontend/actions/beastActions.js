var Dispatcher = require('../dispatcher/dispatcher');
var BeastConstants = require('../constants/beast_constants');
var BeastApiUtil = require('../util/beast_api_util');

var BeastActions = {
  fetchBeast: function(data){
    BeastApiUtil.fetchBeast(data, this.receiveBeast, this.handleError);
  },

  fetchBeasts: function(data){
    BeastApiUtil.fetchBeasts(data, this.receiveBeasts, this.handleError);
  },

  createBeast: function(data){
    console.log("Attempting to create a beast...[beastActions]");
    BeastApiUtil.createBeast(
      data,
      this.receiveBeast,
      this.handleError
    );
  },

  // removeBeast: function(){
  //   BeastApiUtil.removeBeast(data);
  // },

  receiveBeasts: function(beasts){
    debugger;
    Dispatcher.dispatch({
      actionType: BeastConstants.BEASTS_RECEIVED,
      beasts: beasts
    });
  },

  receiveBeast: function(beast){
    console.log("Receiving a beast");
    console.log(beast);
    Dispatcher.dispatch({
      actionType: BeastConstants.BEAST_RECEIVED,
      beast: beast
    });
  },

  handleError: function(errors) {
    Dispatcher.dispatch({
      actionType: BeastConstants.ERROR,
      errors: errors
    });
  }
};

module.exports = BeastActions;
