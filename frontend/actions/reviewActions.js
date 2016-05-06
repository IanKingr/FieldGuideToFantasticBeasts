var Dispatcher = require('../dispatcher/dispatcher');
var ReviewConstants = require('../constants/review_constants');
var ReviewApiUtil = require('../util/review_api_util');

var ReviewActions = {
  fetchReview: function(data){
    ReviewApiUtil.fetchReview(data, this.receiveReview, this.handleError);
  },

  fetchReviews: function(data){
    ReviewApiUtil.fetchReviews(data, this.receiveReviews, this.handleError);
  },

  createReview: function(data){
    ReviewApiUtil.createReview(
      data,
      this.receiveCreatedReview,
      this.handleError
    );
  },

  resetReviewErrors: function(){
    Dispatcher.dispatch({
      actionType: ReviewConstants.RESET_ERRORS,
    });
  },

  // removeReview: function(){
  //   ReviewApiUtil.removeReview(data);
  // },

  receiveReviews: function(reviews){
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  receiveCreatedReview: function(review){
    Dispatcher.dispatch({
      actionType: ReviewConstants.CREATED_REVIEW_RECEIVED,
      review: review
    });
  },

  receiveReview: function(review){
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    });
  },

  handleError: function(errors) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.ERROR,
      errors: errors
    });
  }
};

module.exports = ReviewActions;
