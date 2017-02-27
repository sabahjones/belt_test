/*
    /client/factories/item.js
    The "Client Side DB" / connection between the client and the server (where the client can request additional data)
*/
app.factory("pollFactory", function ($http, $location) {

    console.log("Created pollFactory Factory");

    var factory = {};
    var polls = [];
    var username = "";

    factory.getPolls = function(callback){
      $http({method: 'GET', url: '/polls'})
      .then(function(response){
        callback(response.data)
        polls = response.data
      })
    },

    factory.addnew = function(addpoll, username){
      //console.log("factory username = ", username)
      addpoll.username = username
      $http({method: 'POST', url: '/addpoll', data: addpoll})
      .then(function(response){polls.push(response.data)})
      $location.url('/all')
      console.log('factory addnew --> ', addpoll)
    },

    factory.delete = function(index, id){
      $http({method: 'PUT', url:'/delete/'+id})
      polls.splice(index, 1)
    },

    factory.login = function(loginname){
      console.log("factory received login name: ", loginname)
      username = loginname
    },

    factory.getuser = function(callback){
      callback(username)
      return username
    },

    factory.updatepoll = function(data){
      $http({method: 'POST', url: '/polls', data: data})
      console.log("update poll route hit factory outgoing....")
    }

    return factory;
});
