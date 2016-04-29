var Dispatcher = require('../dispatcher/dispatcher');
var BookmarkConstants = require('../constants/bookmark_constants');
var BookmarkApiUtil = require('../util/bookmark_api_util');

var BookmarkActions = {
  fetchBookmark: function(data){
    BookmarkApiUtil.fetchBookmark(data, this.receiveBookmark, this.handleError);
  },

  fetchBookmarks: function(data){
    BookmarkApiUtil.fetchBookmarks(data, this.receiveBookmarks, this.handleError);
  },

  createBookmark: function(data){
    //Currently what it does is everytime they click the bookmark, it hits the DB and creates an entry and then updates the store. Instead we could just toggle the state in the bookmark component locally or in store and when the componentWillUnmount, POST/DELETE the current status of the bookmark then. Is this more efficient? At the end we would have to iterate over our bookmarks to see which ones are different? If we only had one bookmark we are working with at a time (the current bookmark), then there is no iteration.

    console.log("Attempting to create bookmark...[bookmarkActions]");
    BookmarkApiUtil.createBookmark(
      data,
      this.receiveBookmark,
      this.handleError
    );
  },

  deleteBookmark: function(data){
    console.log("Attempting to delete bookmark...[bookmarkActions]");
    BookmarkApiUtil.deleteBookmark(
      data,
      this.removeBookmark,
      this.handleError
    );
  },

  addBookmark: function(bookmark){
    // Not being used at the moment. Can be used if we decide to locally change the store before checking whether to POST or DELETE from database
    Dispatcher.dispatch({
      actionType: BookmarkConstants.ADD_BOOKMARK,
      bookmark: bookmark
    });
  },

  removeBookmark: function(bookmark){
    Dispatcher.dispatch({
      actionType: BookmarkConstants.REMOVE_BOOKMARK,
      bookmark: bookmark
    });
  },

  receiveBookmarks: function(bookmarks){
    Dispatcher.dispatch({
      actionType: BookmarkConstants.BOOKMARKS_RECEIVED,
      bookmarks: bookmarks
    });
  },

  receiveBookmark: function(bookmark){
    console.log("Receiving a bookmark");
    console.log(bookmark);
    Dispatcher.dispatch({
      actionType: BookmarkConstants.BOOKMARK_RECEIVED,
      bookmark: bookmark
    });
  },

  handleError: function(errors) {
    Dispatcher.dispatch({
      actionType: BookmarkConstants.ERROR,
      errors: errors
    });
  }
};

module.exports = BookmarkActions;
