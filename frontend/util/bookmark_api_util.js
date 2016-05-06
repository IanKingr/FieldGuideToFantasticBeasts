var BookmarkApiUtil = {
  fetchBookmark: function(data, success, error){
    // Might not work as intended
    $.ajax ({
      type: "GET",
      url: "/api/bookmarks/" + data.id,
      success: success,
      error: error
    });
  },

  fetchBookmarks: function(user_id, success, error){
    $.ajax ({
      type: "GET",
      url: "/api/bookmarks",
      data: {user_id: user_id},
      success: success,
      error: error
    });
  },

  createBookmark: function(data, success, error){
    $.ajax ({
      type: "POST",
      url: "api/bookmarks",
      data: {
        user_id: data.user_id,
        beast_id: data.beast_id,
      },
      success: success,
      error: error
    });
  },

  deleteBookmark: function(data, success, error){
    $.ajax ({
      type: "DELETE",
      url: "api/bookmarks/" + data.id,
      success: success,
      error: error
    });
  }

};

module.exports = BookmarkApiUtil;
