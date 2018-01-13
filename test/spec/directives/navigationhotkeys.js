'use strict';

describe('Directive: navigationHotkeys', function () {

  // load the directive's module
  beforeEach(module('navigationHotkeysApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navigation-hotkeys></navigation-hotkeys>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});
