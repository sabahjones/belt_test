/*
    /client/controllers/new-item.js
    The logic for pollresults partial, will connect the factory with the template
*/
app.controller("pollresults", ['$scope', 'pollFactory', '$routeParams', '$location', function ($scope, pollFactory, $routeParams, $location) {
    console.log("Created pollresults Controller");

    var num = 0

    pollFactory.getuser(function(response){
      $scope.username = response
    })
    if(!$scope.username){
      $location.url('/')
    }

    pollFactory.getPolls(function(data){
      console.log($routeParams.id)
      for (d in data){
        if (d == $routeParams.id){
          $scope.onepoll = data[d]
          console.log(data[d]);
        }
      }
      console.log($scope.onepoll)
    })

    $scope.vote = function(id, option, pollobject){
      //console.log(id, option, pollobject)
      if (option == 1){
        num = $scope.onepoll.option_one[1] - 0;
        num += 1;
        $scope.onepoll.option_one[1] = num;
        pollobject.option_one[1] = num
      }
      else if (option == 2){
        num = $scope.onepoll.option_two[1] - 0;
        num += 1;
        $scope.onepoll.option_two[1] = num;
        pollobject.option_two[1] = num
      }
      else if (option == 3){
        num = $scope.onepoll.option_three[1] - 0;
        num += 1;
        $scope.onepoll.option_three[1] = num;
        pollobject.option_three[1] = num
      }
      else if (option == 4){
        num = $scope.onepoll.option_four[1] - 0;
        num += 1;
        $scope.onepoll.option_four[1] = num;
        pollobject.option_four[1] = num
      }
      pollFactory.updatepoll(pollobject)
      //console.log(pollobject)
      num = 0
     }
}])
