/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 9:07:03 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';
  angular.module('Belajar')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$cookies', 'LoginService', '$state'];

  function LoginController($cookies, LoginService, $state) {
    var login = this;

    login.inputLogin = {};

    login.url = '';

    login.processLogin = function(l) {
      LoginService.login(l).success(function successCallback(response) {
        $cookies.put('token', response.access_token);
        $state.go('home');
      }, function errorCallback(response) {
        console.log(response);
      });
    };

  }

})();
