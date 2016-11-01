'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MapsCtrl
 * @description
 * # MapsCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MapsCtrl', function ($scope, $http) {
  	$scope.place = null;
  	$scope.googleMapsUrl = "https://maps.google.com/maps/api/js?key=AIzaSyBNJwfFIMn7n8wjih28hOJZEpV4rp_CVp8";
  	$scope.autocompleteOptions = {
  	    componentRestrictions: { country: 'fr' },
  	    types: ['geocode']
  	};

  	$scope.isMarkerSet = function () {
  		if ($scope.place !== null) {
  			return true;
  		}
  		return false;
  	};

  	$scope.addUserLocation = function() {
  		$http.post('http://reggaeshark.eu:3000/api/UserLocations', {'name' : $scope.name, 'city': $scope.city}).then(function(response){
  			$scope.list.unshift(response.data);
  		});
  	}



  });
