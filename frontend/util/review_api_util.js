var ReviewApiUtil = {
  fetchReview: function(data, success, error){
    $.ajax ({
      type: "GET",
      url: "/api/reviews/" + data.id,
      success: success,
      error: error
    });
  },

  fetchReviews: function(data, success, error){
    $.ajax ({
      type: "GET",
      url: "/api/reviews",
      data: {data: data},
      success: success,
      error: error
    });
  },

  createReview: function(data, success, error){
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
