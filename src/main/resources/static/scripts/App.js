/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 16, 2016
 * @Time 8:55:22 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';
  angular
    .module('Belajar', [
      'ui.router',
      'lumx',
      'oc.lazyLoad',
      'ngCookies',
      'base64',
      'angular-loading-bar'
    ])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {

      cfpLoadingBarProvider.includeSpinner = true;

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            'lazyLoadView': {
              template: '<ng-home></ng-home>'
            }
          },
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'scripts/directives/ngHome.js'
              ]);
            }]
          },
          authenticate: false
        })
        .state('login', {
          url: '/login',
          views: {
            'lazyLoadView': {
              template: '<ng-login></ng-login>'
            }
          },
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'scripts/services/LoginService.js',
                'scripts/services/UserService.js',
                'scripts/controllers/LoginController.js',
                'scripts/directives/ngLogin.js'
              ]);
            }]
          },
          authenticate: false
        })
        .state('logout', {
          url: '/logout',
          views: {
            'lazyLoadView': {
              template: '<ng-logout></ng-logout>'
            }
          },
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'scripts/controllers/LogoutController.js',
                'scripts/directives/ngLogout.js'
              ]);
            }]
          },
          authenticate: true
        })
        .state('barang', {
          url: '/barang',
          views: {
            'lazyLoadView': {
              template: '<ng-barang></ng-barang>'
            }
          },
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'scripts/services/BarangService.js',
                'scripts/controllers/BarangController.js',
                'scripts/directives/ngBarang.js'
              ]);
            }]
          },
          authenticate: true
        });

      $httpProvider.interceptors.push(['$q', '$location', '$window', function($q, $location, $window) {
        return {
          'response': function(response) {
            if (response.status === 401) {
              console.log("Response 401");
            }
            return response || $q.when(response);
          },
          'responseError': function(rejection) {
            if (rejection.status === 401) {
              $window.location.href = '/#/login';
            }
            return $q.reject(rejection);
          }
        };
      }]);

    })
    .run(['$rootScope', '$state', 'AuthenticateService', function($rootScope, $state, AuthenticateService) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate && !AuthenticateService.isAuthenticate()) {
          $state.go('login');
          event.preventDefault();
        }
      });
    }]);

})();
