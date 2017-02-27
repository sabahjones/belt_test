/*
    /client/controllers/pollIndex.js
    The logic for pollIndex partial, will connect the factory with the template
*/

app.controller("pollIndex", function (pollFactory, $scope, $filter, $location) {
    console.log("Created pollIndex Controller");

    pollFactory.getuser(function(response){
      $scope.username = response
    })
    if(!$scope.username){
      $location.url('/')
    }

    pollFactory.getPolls(function(response){
      $scope.polls = response
    })

    $scope.delete = function($index, id){
      pollFactory.delete($index, id)
    },

    $scope.reload = function(){
      location.reload(true)
      // delete $scope.username
      // pollFactory.logout()
      // console.log("$scope username value = ", $scope.username)
      // $location.url('/')
    }

});
