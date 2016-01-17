/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 6:15:59 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';
  angular.module('Belajar')
    .controller('BarangController', BarangController);

  BarangController.$inject = ['$cookies', 'BarangService', 'LxDialogService'];

  function BarangController($cookies, BarangService, LxDialogService) {
    var barang = this;

    barang.dataBarang = {};
    barang.inputBarang = {};

    function getBarangs() {
      BarangService.getBarangs().success(function(data) {
        barang.dataBarang = data._embedded.barang;
      });
    }

    getBarangs();

    barang.new = function(dialogId) {
      barang.inputBarang = {};
      barang.enable = false;
      LxDialogService.open(dialogId);
    };

    barang.saveBarang = function(b) {
      BarangService.saveBarang(b).success(function(data) {
        getBarangs();
      });
    };

    barang.editBarang = function(url, dialogId) {
      BarangService.getBarang(url).success(function(data) {
        barang.inputBarang.urlBarang = data._links.barang.href;
        barang.inputBarang.namaBarang = data.namaBarang;
        barang.inputBarang.jenisBarang = data.jenisBarang;
        barang.inputBarang.tanggalKadaluarsa = data.tanggalKadaluarsa;
        LxDialogService.open(dialogId);
        barang.enable = true;
      });
    };

    barang.updateBarang = function(b) {
      BarangService.updateBarang(b, b.urlBarang).success(function(data) {
        getBarangs();
      });
    };

    barang.deleteBarang = function(b) {
      BarangService.deleteBarang(b).success(function(data) {
        getBarangs();
      });
    };


  }
})();
