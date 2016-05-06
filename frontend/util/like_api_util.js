var LikeApiUtil = require('../util/like_api_util');
var LikeConstants = require('../constants/like_constants');
var Dispatcher = require('../dispatcher/dispatcher');

var LikeActions = {
  createLike: function(data, success) {
    console.log("Posting like");
    $.ajax ({
      type: "POST",
      url: "/api/likes",
      data: data,
      success: success
    });
  },

  deleteLike: function(data, success) {
    console.log("Posting Unlike");
    $.ajax ({
      type: "DELETE",
      url: "/api/likes",
      data: {like : data},
      success: success
    });
  },
};

module.exports = LikeActions;
