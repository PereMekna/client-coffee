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

  	var token = 0;

  	$scope.logged = false;
  	$scope.loading = false;

  	var getUserProfile = function(userId) {
  		$http.get('http://reggaeshark.eu:3000/api/Users/' + userId + '?access_token=' + token)
  		.then(function(response){
  			$scope.username = response.data.username;
  		}, function(error){
  			console.log(error);
  		});
  	}

  	$scope.logout = function() {
  		$scope.loading = true;
  		$http.post('http://reggaeshark.eu:3000/api/Users/logout?access_token=' + token).then(function(response){
  			$scope.loading = false;
  			$scope.logged = false;
  		}, function(error) {
  			$scope.loading = false;
  			console.log('error', error);
  		});
  	}

  	$scope.connectUser = function() {
  		$scope.loading = true;
  	  $http.post('http://reggaeshark.eu:3000/api/Users/login', {'email' : $scope.email, 'password': $scope.password})
  	  .then(function(response){
  	  	$scope.loading = false;
  	  	$scope.logged = true;
  	  	token = response.data.id;
   	  	getUserProfile(response.data.userId);
  	  }, function(error){
  	  	$scope.loading = false;
  	  	console.log(error);
  	  });
  	};
  });
