


app.controller("logincontroller", ['$scope', 'pollFactory', '$location', function($scope, pollFactory, $location){
  console.log("logincontroller here...")


  pollFactory.getuser(function(response){
    $scope.username = response
  })
  if ($scope.username){
    $location.url('/all')
  }

  $scope.login = function(){
    //console.log($scope.username)
    pollFactory.login($scope.username)
    $location.url('/all')
  }


}])
