/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 9:59:58 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';
  angular.module('Belajar')
    .controller('LogoutController', LogoutController);

  LogoutController.$inject = ['$cookies', '$window', 'UrlService'];

  function LogoutController($cookies, $window, UrlService) {

    function logout() {
      $cookies.remove('token');
      $cookies.remove('refreshToken');
      $window.location.href = UrlService.logout();
    }

    logout();

  }

})();
