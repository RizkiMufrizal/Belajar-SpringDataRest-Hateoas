/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 6:15:46 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';

  angular.module('Belajar')
    .factory('BarangService', BarangService);

  BarangService.$inject = ['$http', '$cookies'];

  function BarangService($http, $cookies) {

    return {
      getBarang: function(url) {
        return $http({
          method: 'GET',
          url: url,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + $cookies.get('token')
          }
        });
      },
      getBarangs: function(page, size) {
        return $http({
          method: 'GET',
          url: '/api/barang?page=' + page + '&size=' + size,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + $cookies.get('token')
          }
        });
      },
      saveBarang: function(b) {
        return $http({
          method: 'POST',
          url: '/api/barang',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + $cookies.get('token')
          },
          data: b
        });
      },
      updateBarang: function(b, url) {
        return $http({
          method: 'PUT',
          url: url,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + $cookies.get('token')
          },
          data: b
        });
      },
      deleteBarang: function(url) {
        return $http({
          method: 'DELETE',
          url: url,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + $cookies.get('token')
          }
        });
      }
    };

  }

})();
