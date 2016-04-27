var Dispatcher = require('../dispatcher/dispatcher.js');

var UserActions = require('../actions/userActions');


var UserApiUtil = {
  fetchCurrentUser: function(){
    $.ajax ({
      type: "GET",
      url: "/api/session",
      success: function(user){
        UserActions.receiveCurrentUser(user);
      }
    });
  },

  createUser: function(data){
    console.log("posting to AJAX");
    $.ajax ({
      type: "POST",
      url: "api/user",
      data: {
        username: data.username,
        password: data.password
      },
      success: function(user){
        debugger;
        console.log("callback success");
        UserActions.receiveCurrentUser(user);
      },
      error: function(response){
        console.log("invalid user creation");
      }
    });
  },

  login: function(loginData){
    $.ajax ({
      type: "POST",
      url: "/api/session",
      data: {
        username: loginData.username,
        password: loginData.password},
      success: function(user){
        UserActions.receiveCurrentUser(user);
      }
    });
  },

  logout: function(data){
    console.log("Logging out");
    $.ajax ({
      type: "DELETE",
      url: "/api/session",
      success: function(){
        UserActions.removeCurrentUser();
      }
    });
  }
};

module.exports = UserApiUtil;
