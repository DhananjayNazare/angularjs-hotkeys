'use strict';

/**
 * @ngdoc directive
 * @name navigationHotkeysApp.directive:navigationBarExample
 * @description
 * # navigationBarExample
 */
angular.module('navigationHotkeysApp')
.directive('navigationBarExample', function () {
  return {
    template: '<nav class="navbar navbar-default">' +
    '<div navigation-hotkeys class="container-fluid">' +
      '<div class="navbar-header">' +
        '<a class="navbar-brand menu-item" href="#">WebSiteName</a>' +
      '</div>' +
      '<ul class="nav navbar-nav">' +
        '<li class="active"><a href="#" class="menu-item">Home</a></li>' +
        '<li><a href="#" class="menu-item">Page 1</a></li>' +
        '<li><a href="#" class="menu-item">Page 2</a></li>' +
        '<li><a href="#" class="menu-item">Page 3</a></li>' +
      '</ul>' +
    '</div>' +
  '</nav>',
    restrict: 'E'
  };
});
