'use strict';

/**
 * @ngdoc service
 * @name testApp.userService
 * @description
 * # userService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('userService', function ($scope, $http) {

  	var access_token = "";

    return {
    	loginUser:function (_email, _password) {
			$http.post('http://reggaeshark.eu:3000/api/Users/login', {'email' : _email, 'password': _password})
			.then(function(response){
				access_token = response.data.id;
				$cookies.put('access_token', response.data.id);
			  	getUserProfile(response.data.userId);
			}, function(error){
				
			});
    	}
    }
  });
