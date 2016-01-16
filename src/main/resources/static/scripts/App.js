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
      'ngCookies'
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
              template: '<h1>Hello login</h1>'
            }
          }
        });

    })
    .run(['$rootScope', '$state', 'LoginService', function($rootScope, $state, LoginService) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate && !LoginService.isAuthenticate()) {
          $state.go('login');
          event.preventDefault();
        }
      });
    }]);

})();
