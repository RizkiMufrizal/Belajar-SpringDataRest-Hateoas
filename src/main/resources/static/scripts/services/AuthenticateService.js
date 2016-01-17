/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 12:37:30 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';

  angular.module('Belajar')
    .factory('AuthenticateService', AuthenticateService);

  AuthenticateService.$inject = ['$cookies'];

  function AuthenticateService($cookies) {

    return {
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
