var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ReviewConstants = require('../constants/review_constants');
var BeastConstants = require('../constants/beast_constants');


var ReviewStore = new Store(Dispatcher);

var _currentReview = [];
var _errors;
var _reviews = {};

ReviewStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ReviewConstants.REVIEW_RECEIVED:
    	ReviewStore.setCurrentReview(payload.review);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.CREATED_REVIEW_RECEIVED:
      ReviewStore.setCurrentReview(payload.review);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEWS_RECEIVED:
      ReviewStore.resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    // case ReviewConstants.REMOVE_REVIEW:
    //   console.log("Removing review from Review Store");
    //   ReviewStore.__emitChange();
    // 	// ReviewStore.logout();
    //   break;
    case BeastConstants.CREATED_BEAST_RECEIVED:
      ReviewStore.resetErrors();
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.RESET_ERRORS:
      ReviewStore.resetErrors();
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.ERROR:
      ReviewStore.setErrors(payload.errors);
      ReviewStore.__emitChange();
      break;
  }
};

ReviewStore.currentReview = function(){
  if (_currentReview[0]) {
  	return _currentReview.slice()[0];
  }
};

ReviewStore.find = function(id){
  return _reviews[id]; //check this
};

ReviewStore.allStored = function(){
  return Object.keys(_reviews).map(function(key){
    return _reviews[key];
  });
};

ReviewStore.setCurrentReview = function(review){
  _errors = null;
  _currentReview[0] = review;
  ReviewStore.addReview(review);
};

ReviewStore.addReview = function(review){
  _reviews[review.id] = review;
},

ReviewStore.resetReviews = function(reviews){
  //Need to check and see what form the reviews are passed back as from the JSON. If they are an object or not.
  _reviews = {};
  // debugger;
  reviews.forEach(function (review) {
    _reviews[review.id] = review;
  });
};

ReviewStore.setErrors = function(errors){
  _errors = null;
  _errors = errors;
};

ReviewStore.resetErrors = function(){
  _errors = null;
};

ReviewStore.errors = function(){
  if (_errors){
    return JSON.parse(_errors.responseText).errors;
  }
  return null;
};

module.exports = ReviewStore;
