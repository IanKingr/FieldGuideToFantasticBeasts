var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var BookmarkConstants = require('../constants/bookmark_constants');

var BookmarkStore = new Store(Dispatcher);

var _errors, _currentBookmark;
var _bookmarks = {};

BookmarkStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BookmarkConstants.BOOKMARK_RECEIVED:
    	BookmarkStore.setCurrentBookmark(payload.bookmark);
      BookmarkStore.__emitChange();
      break;
    case BookmarkConstants.BOOKMARKS_RECEIVED:
    	BookmarkStore.resetBookmarks(payload.bookmarks);
      BookmarkStore.__emitChange();
      break;
    case BookmarkConstants.REMOVE_BOOKMARK:
      BookmarkStore.removeBookmark(payload.bookmark);
      BookmarkStore.__emitChange();
      break;
    case BookmarkConstants.ERROR:
      BookmarkStore.resetErrors(payload.errors);
      BookmarkStore.__emitChange();
      break;
  }
};

BookmarkStore.find = function(id){
  return _bookmarks[id]; //check this
};

BookmarkStore.allBookmarks = function(){
  return Object.keys(_bookmarks).map(function(key){
    return _bookmarks[key];
  });
};

BookmarkStore.setCurrentBookmark = function(bookmark){
  _currentBookmark = bookmark;
};

BookmarkStore.currentBookmark = function(){
  return _currentBookmark;
};

BookmarkStore.addBookmark = function(bookmark){
  _bookmarks[bookmark.id] = bookmark;
};

BookmarkStore.removeBookmark = function(bookmark){
  _currentBookmark = null;
  // delete _bookmarks[bookmark.id];
};

BookmarkStore.resetBookmarks = function(bookmarks){
  //Need to check and see what form the bookmarks are passed back as from the JSON. If they are an object or not.
  _bookmarks = {};

  bookmarks.forEach(function (bookmark) {
    _bookmarks[bookmark.id] = bookmark;
  });
};

BookmarkStore.resetErrors = function(errors){
  _errors = null;
  _errors = errors;
};

BookmarkStore.errors = function(){
  if (_errors){
    return JSON.parse(_errors.responseText).errors;
  }
};

module.exports = BookmarkStore;
