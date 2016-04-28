var Dispatcher = require('Dispatcher');
var BeastConstants = require('../constants/beast_constants');
var BeastApiUtil = require('../util/beast_api_util');

var BeastActions = {
  fetchBeast: function(data){
    BeastApiUtil.fetchBeast(data, this.receiveBeast);
  },

  createBeast: function(data){
    BeastApiUtil.createBeast(data, this.receiveBeast);
  },

  // removeBeast: function(){
  //   BeastApiUtil.removeBeast(data);
  // },

  receiveAllBeasts: function(beasts){
    Dispatcher.dispatch({
      actionType: BeastConstants.BEASTS_RECEIVED,
      beasts: beasts
    });
  },

  receiveBeast: function(beast){
    Dispatcher.dispatch({
      actionType: BeastConstants.BEAST_RECEIVED,
      beast: beast
    });
  }
};

module.exports = BeastActions;
