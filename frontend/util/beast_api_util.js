var BeastApiUtil = {
  fetchBeast: function(data, success){
    $.ajax ({
      type: "GET",
      url: "/api/beasts/" + data.id,
      success: success,
      // error: function(response){
      //   BeastActions.handleError(response);
      // }
    });
  },

  fetchBeasts: function(data, success){
    $.ajax ({
      type: "GET",
      url: "/api/beasts",
      data: {data: data},
      success: success
    });
  },

  createBeast: function(data, success, error){
    console.log("posting to AJAX [beast_api_util]");
    $.ajax ({
      type: "POST",
      url: "api/beasts",
      data: {
        author_id: data.author_id,
        name: data.name,
        description: data.description,
        avg_length: data.avg_length,
        avg_height: data.avg_height,
        avg_weight: data.avg_weight,
        affinity_id: data.affinity_id,
      },
      success: success,
      error: error
    });
  }

};

module.exports = BeastApiUtil;
