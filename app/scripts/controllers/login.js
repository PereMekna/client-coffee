'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('LoginCtrl', function ($scope, $http) {

  	$scope.logged = false;

  	$scope.connectUser = function() {
  	  $http.post('http://reggaeshark.eu:3000/api/Users/login', {'email' : $scope.email, 'password': $scope.password})
  	  .then(function(response){
  	  	$scope.logged = true;
  	    console.log("success", response);
  	  }, function(error){
  	    console.log("error", error);
  	  });
  	};
  });
