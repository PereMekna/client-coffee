'use strict';

describe('Controller: AddcoffeeCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var AddcoffeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcoffeeCtrl = $controller('AddcoffeeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddcoffeeCtrl.awesomeThings.length).toBe(3);
  });
});
