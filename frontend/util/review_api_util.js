var ReviewApiUtil = {
  fetchReview: function(data, success, error){
    console.log("Fetching a review [reviewApi]");
    $.ajax ({
      type: "GET",
      url: "/api/reviews/" + data.id,
      success: success,
      error: error
    });
  },

  fetchReviews: function(data, success, error){
    console.log("issuing fetchReviews api GET request");
    $.ajax ({
      type: "GET",
      url: "/api/reviews",
      data: {data: data},
      success: success,
      error: error
    });
  },

  createReview: function(data, success, error){
    debugger;
    console.log("posting to AJAX [review_api_util]");
    $.ajax ({
      type: "POST",
      url: "/api/reviews",
      data: {
        user_id: data.user_id,
        beast_id: data.beast_id,
        rating: data.rating,
        description: data.description,
      },
      success: success,
      error: error
    });
  }

};

module.exports = ReviewApiUtil;
