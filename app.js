var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope,$http,$interval) {
  //$scope.name = 'World';
  var onError = function(){
    $scope.error = "Some Error Occured";
  };
  //var username = '';
  var decrement = function(){
    $scope.countdown -=1;
    if($scope.countdown==0){
      $scope.search($scope.username);
    }
  };
  var interval = null;
  var startCountdown=function(){
    interval = $interval(decrement,1000,$scope.countdown);
  }

  $scope.search= function(username){
  $http.get('https://api.github.com/users/'+ username)
    .then(function(response){
      $scope.data = response.data;
      //console.log(response.data);
    },onError);

    if(interval!= null){
      $interval.cancel(interval);
      $scope.countdown=null;
  }
  };

  $scope.username = 'angular';
  $scope.countdown = 10;
  startCountdown(); 
});
