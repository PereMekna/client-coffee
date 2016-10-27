'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AddcoffeeCtrl
 * @description
 * # AddcoffeeCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('AddcoffeeCtrl', function ($scope, $http) {

  	$scope.loading = true;
  	$http.get('http://reggaeshark.eu:3000/api/CoffeeShops?filter[order]=id%20DESC').then(function(response){
  		$scope.list = response.data;
  		$scope.loading = false;
  	}, function(error){
      $scope.loading = false;
      $scope.error = true;
    });

  	$scope.addCoffee = function () {
  		$http.post('http://reggaeshark.eu:3000/api/CoffeeShops', {'name' : $scope.name, 'city': $scope.city}).then(function(response){
  			$scope.list.unshift(response.data);
  		});
  	}

  });
