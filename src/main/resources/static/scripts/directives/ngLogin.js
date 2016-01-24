/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 9:10:21 AM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';
  angular.module('Belajar')
    .directive('ngLogin', ngLogin);

  function ngLogin() {
    return {
      restrict: 'E',
      templateUrl: 'templates/login.template.html',
      controller: 'LoginController',
      controllerAs: 'login'
    };
  }
})();
