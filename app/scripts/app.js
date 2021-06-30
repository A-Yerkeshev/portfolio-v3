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
    'ngTouch',
    'ui.carousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/blank.html'
      })
      .when('/projects', {
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
        redirectTo: '/projects'
      });
  });

  var Portfolio = angular.module('portfolioApp');
