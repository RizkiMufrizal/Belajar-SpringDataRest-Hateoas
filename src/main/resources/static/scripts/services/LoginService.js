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

  LoginService.$inject = ['$http', '$base64', 'UrlService'];

  function LoginService($http, $base64, UrlService) {

    return {
      login: function(login) {

        var data = {
          client_id: 'clientapp',
          client_secret: 123456,
          scope: 'read',
          grant_type: 'password',
          username: login.email,
          password: login.password
        };

        return $http({
          method: 'POST',
          url: UrlService.loginProcess(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Basic ' + $base64.encode('clientapp:123456')
          },
          data: $.param(data)
        });
      }
    };

  }

})();
