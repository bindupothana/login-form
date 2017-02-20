var app = angular.module('loginApp');

app.controller('newCtrl', function($scope, $stateParams, $state) {
	$scope.submit = function(index){
    $state.go('list');
  }
});







