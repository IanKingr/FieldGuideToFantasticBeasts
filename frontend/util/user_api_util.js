
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

  createUser: function(data, success){
    console.log("posting to AJAX");
    $.ajax ({
      type: "POST",
      url: "api/user",
      data: {
        username: data.username,
        password: data.password
      },
      success: success,
      // error: function(response){
      //   console.log("Invalid user creation");
      //   UserActions.handleError(response);
      // }
    });
  },

  login: function(loginData, success){
    $.ajax ({
      type: "POST",
      url: "/api/session",
      data: {
        username: loginData.username,
        password: loginData.password},
      success: success,
      // error: function(response){
      //   console.log("Login failure");
      //   UserActions.handleError(response);
      // }
    });
  },

  logout: function(data, success){
    console.log("Logging out");
    $.ajax ({
      type: "DELETE",
      url: "/api/session",
      success: success
    });
  }
};

module.exports = UserApiUtil;
