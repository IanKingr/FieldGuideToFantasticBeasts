var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var ReviewConstants = require('../constants/review_constants');

var ReviewStore = new Store(Dispatcher);

var _currentReview = [];
var _errors;
var _reviews = {};

ReviewStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ReviewConstants.REVIEW_RECEIVED:
      console.log("REVIEW_RECEIVED [ReviewStore]");
    	ReviewStore.setCurrentReview(payload.review);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.CREATED_REVIEW_RECEIVED:
      console.log("CREATED_REVIEW_RECEIVED [ReviewStore]");
      ReviewStore.setCurrentReview(payload.review);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEWS_RECEIVED:
      console.log("REVIEWS_RECEIVED [ReviewStore]");
      ReviewStore.resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    // case ReviewConstants.REMOVE_REVIEW:
    //   console.log("Removing review from Review Store");
    //   ReviewStore.__emitChange();
    // 	// ReviewStore.logout();
    //   break;
    case ReviewConstants.RESET_ERRORS:
      console.log("RESET_ERRORS [ReviewStore]");
      ReviewStore.resetErrors();
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.ERROR:
      console.log("REVIEW_ERROR [ReviewStore]");
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
