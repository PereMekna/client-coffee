'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:CoffeesCtrl
 * @description
 * # CoffeesCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('CoffeesCtrl', function ($scope, $http) {
  	$scope.loading = true;
    $http.get('http://localhost:3000/api/CoffeeShops?filter[order]=id%20DESC').then(function(response){
    	$scope.loading = false;
    	$scope.list = response.data;
    }, function(error){
    	$scope.error = true;
    	$scope.loading = false;
    });
  });
