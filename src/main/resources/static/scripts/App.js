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
      'base64'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            'lazyLoadView': {
              template: '<h1>Hello Word</h1>'
            }
          },
          authenticate: true
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
                '../scripts/services/LoginService.js',
                '../scripts/controllers/LoginController.js',
                '../scripts/directives/ngLogin.js'
              ]);
            }]
          }
        });

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
