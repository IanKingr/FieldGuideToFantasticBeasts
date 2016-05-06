var LikeApiUtil = require('../util/like_api_util');
var LikeConstants = require('../constants/like_constants');
var Dispatcher = require('../dispatcher/dispatcher');

var LikeActions = {
  createLike: function(data) {
    LikeApiUtil.createLike(data, this.receiveLike);
  },

  deleteLike: function(data) {
    LikeApiUtil.deleteLike(data, this.removeLike);
  },

  receiveLike: function(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.LIKE_RECEIVED,
      like: like
    });
  },

  removeLike: function(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.LIKE_REMOVED,
      like: like
    });
  }
};

module.exports = LikeActions;
