
var UserApiUtil = {
  fetchCurrentUser: function(success){
    $.ajax ({
      type: "GET",
      url: "/api/session",
      success: success,
      // error: function(response){
      //   UserActions.handleError(response);
      // }
    });
  },

  createUser: function(data, success, error){
    $.ajax ({
      type: "POST",
      url: "/api/user",
      data: {
        username: data.username,
        password: data.password
      },
      success: success,
      error: error
    });
  },

  login: function(loginData, success, error){
    $.ajax ({
      type: "POST",
      url: "/api/session",
      data: {
        username: loginData.username,
        password: loginData.password},
      success: success,
      error: error
    });
  },

  logout: function(success){
    $.ajax ({
      type: "DELETE",
      url: "/api/session",
      success: success
    });
  }
};

module.exports = UserApiUtil;
