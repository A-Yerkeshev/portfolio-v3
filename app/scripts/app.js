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
        templateUrl: '/views/projects.html'
      })
      .when('/profile', {
        templateUrl: '/views/profile.html'
      })
      .when('/contacts', {
        templateUrl: '/views/contacts.html'
      })
      .when('/:project', {
        templateUrl: '/views/project.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  var Portfolio = angular.module('portfolioApp');
