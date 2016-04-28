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

  createBeast: function(data, success){
    console.log("posting to AJAX");
    $.ajax ({
      type: "POST",
      url: "api/beasts",
      data: {
        author_id: data.author_id
        name: data.name,
        description: data.description,
        avg_length: data.avg_length,
        avg_height: data.avg_height,
        avg_weight: data.avg_weight,
        affinity_id: data.affinity_id,
      },
      success: success,
      // error: function(response){
      //   console.log("Invalid beast creation");
      //   BeastActions.handleError(response);
      // }
    });
  }

};

module.exports = BeastApiUtil;
