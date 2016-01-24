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

  function UrlService() {

    return {
      barangs: function(page, size) {
        return 'api/barang?page=' + page + '&size=' + size;
      },
      barang: function() {
        return 'api/barang';
      },
      loginProcess: function() {
        return 'oauth/token';
      },
      login: function() {
        return '#/login';
      },
      logout: function() {
        return '#/';
      },
      user: function() {
        return 'api/user';
      }
    };

  }

})();
