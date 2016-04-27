var Dispatcher = require('Dispatcher');
var BeastConstants = require('../constants/beast_constants');

var BeastActions = {
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
