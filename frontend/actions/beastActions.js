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

  fetchAllBeastsForSearch: function(data){
    BeastApiUtil.fetchBeasts(data, this.receiveSearchBeasts, this.handleError);
  },

  createBeast: function(data){
    BeastApiUtil.createBeast(
      data,
      this.receiveCreatedBeast,
      this.handleError
    );
  },

  // removeBeast: function(){
  //   BeastApiUtil.removeBeast(data);
  // },

  receiveBeasts: function(beasts){
    Dispatcher.dispatch({
      actionType: BeastConstants.BEASTS_RECEIVED,
      beasts: beasts
    });
  },

  receiveSearchBeasts: function(beasts){
    Dispatcher.dispatch({
      actionType: BeastConstants.ALL_BEASTS_RECEIVED,
      beasts: beasts
    });
  },

  receiveCreatedBeast: function(beast){
    Dispatcher.dispatch({
      actionType: BeastConstants.CREATED_BEAST_RECEIVED,
      beast: beast
    });
  },

  receiveBeast: function(beast){
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
