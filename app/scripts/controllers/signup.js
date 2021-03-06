'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the testApp
 */
var signupModule = angular.module('testApp');

signupModule.controller('SignupCtrl', function ($scope, $http, $location) {
    $scope.addUser = function() {
      $http.post('http://reggaeshark.eu:3000/api/Users', {'username': $scope.username, 
        'email' : $scope.email, 'password': $scope.password})
      .then(function(response){
        $location.path('/');
        console.log("success", response);
      }, function(error){
        console.log("error", error);
      });
    };
  });

signupModule.directive('equalsTo', [function () {
       return {
           restrict: 'A', // S'utilise uniquement en tant qu'attribut
           scope: true,
           require: 'ngModel',
           link: function (scope, elem, attrs, control) {
               var check = function () {
               //Valeur du champs courant 
               var v1 = scope.$eval(attrs.ngModel); // attrs.ngModel = "ConfirmPassword"
               //valeur du champ à comparer
               var v2 = scope.$eval(attrs.equalsTo).$viewValue; // attrs.equalsTo = "Password"
               return v1 == v2;
           };

           scope.$watch(check, function (isValid) {
               // Défini si le champ est valide
               control.$setValidity("equalsTo", isValid);
           });
       }
   };
}]);