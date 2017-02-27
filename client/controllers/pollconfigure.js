/*
    /client/controllers/pollconfigure.js
    The logic for pollconfigure partial, will connect the factory with the template
*/
app.controller("pollconfigure", ['$scope', 'pollFactory','$location', function ($scope, pollFactory, $location) {
    //console.log("Created pollconfigure Controller");

    pollFactory.getuser(function(response){
      $scope.username = response
    })
    if(!$scope.username){
      $location.url('/')
    }

    $scope.create = function(){
      pollFactory.addnew($scope.poll, $scope.username)
      //console.log($scope.username)
      $scope.poll = {}
    }


}]);
