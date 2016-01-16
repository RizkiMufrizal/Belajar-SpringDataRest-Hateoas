/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 9:07:36 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';

  angular.module('Belajar')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http', '$cookies'];

  function LoginService($http, $cookies) {

    return {
      login: function(url) {
        return $http.post(url);
      },
      isAuthenticate: function() {
        if ($cookies.get('token')) {
          return true;
        } else {
          return false;
        }
      }
    };

  }

})();
