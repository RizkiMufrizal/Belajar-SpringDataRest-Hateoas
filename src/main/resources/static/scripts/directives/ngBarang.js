/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 6:16:08 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';
  angular.module('Belajar')
    .directive('ngBarang', ngBarang);

  function ngBarang() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/barang.template.html',
      controller: 'BarangController',
      controllerAs: 'barang'
    };
  }
})();
