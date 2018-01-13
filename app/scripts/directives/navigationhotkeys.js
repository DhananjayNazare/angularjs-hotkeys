'use strict';

/**
 * @ngdoc directive
 * @name navigationHotkeysApp.directive:navigationHotkeys
 * @description
 * # navigationHotkeys
 */
angular.module('navigationHotkeysApp')
.constant('NavigationKeys', {LEFT:37, UP:38, RIGHT:39, DOWN:40, HOME:36, END:35})
.directive('navigationHotkeys', function ($timeout, NavigationKeys) {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      var allItems = [];
      var delay = parseInt(attrs.delay);
      delay = !isNaN(delay)? delay: 2000;

      $timeout(function(){
        var itemClass = '.' + (attrs.itemClass || 'menu-item');
        allItems = element.find(itemClass);
        allItems.on('keydown', onKeyPressed);
      }, delay);

      function onKeyPressed(ev){
        var key = ev.which;

        if(!isValidKey(key)){
          return;
        }

        var itemList = allItems.filter(':visible:not(:disabled)');

        var index = itemList.index(ev.currentTarget);

        if(index < (itemList.length -1) && (key === NavigationKeys.RIGHT || key === NavigationKeys.DOWN)){
          index = index+1;
        }
        else if(index > 0 && (key === NavigationKeys.LEFT || key === NavigationKeys.UP)){
          index = index - 1;
        }else if(key === NavigationKeys.HOME){
          index = 0;
        }else if(key === NavigationKeys.END){
          index = itemList.length - 1;
        }

        if(index > -1){
          itemList.filter(':eq('+index+')').get(0).focus();
          ev.preventDefault();
        }
        itemList = null;
      }

      function isValidKey(key){
        return key === NavigationKeys.LEFT || key === NavigationKeys.UP || key === NavigationKeys.RIGHT || key === NavigationKeys.DOWN || key === NavigationKeys.HOME || key === NavigationKeys.END;
      }

      scope.$on('$destroy', function(){
        $(allItems).off('keydown');
        allItems = null;
      });

    }
  };
});
