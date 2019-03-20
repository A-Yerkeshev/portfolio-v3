'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html'
      })
      .when('/profile', {
        templateUrl: '/views/profile.html'
      })
      .when('/:project', {
        templateUrl: '/views/project.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  var Portfolio = angular.module('portfolioApp');
