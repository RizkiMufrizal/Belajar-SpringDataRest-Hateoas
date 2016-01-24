/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 4:16:53 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';

  angular.module('Belajar')
    .factory('UserService', UserService);

  UserService.$inject = ['$http', 'UrlService'];

  function UserService($http, UrlService) {

    return {
      register: function(r) {
        return $http.post(UrlService.user(), r);
      }
    };

  }

})();
