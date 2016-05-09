var BeastApiUtil = {
  fetchBeast: function(data, success, error){
    $.ajax ({
      type: "GET",
      url: "/api/beasts/" + data.id,
      success: success,
      error: error
    });
  },

  fetchBeasts: function(data, success, error){
    $.ajax ({
      type: "GET",
      url: "/api/beasts",
      data: {data: data},
      success: success,
      error: error
    });
  },

  fetchAllBeastsForSearch: function(data, success, error){
    $.ajax ({
      type: "GET",
      url: "/api/beasts",
      data: {data: data},
      success: success,
      error: error
    });
  },

  createBeast: function(data, success, error){
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
