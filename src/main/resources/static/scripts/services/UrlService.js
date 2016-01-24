/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 24, 2016
 * @Time 11:22:55 AM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';

  angular.module('Belajar')
    .factory('UrlService', UrlService);

  UrlService.$inject = ['$window'];

  function UrlService($window) {

    var baseUrl = $window.location.pathname;

    return {
      barangs: function(page, size) {
        return baseUrl + 'api/barang?page=' + page + '&size=' + size;
      },
      barang: function() {
        return baseUrl + 'api/barang';
      },
      loginProcess: function() {
        return baseUrl + 'oauth/token';
      },
      login: function() {
        return baseUrl + '#/login';
      },
      logout: function() {
        return baseUrl + '#/';
      },
      user: function() {
        return baseUrl + 'api/user';
      }
    };

  }

})();
