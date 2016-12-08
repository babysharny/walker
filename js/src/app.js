'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/walker.html',
        controller: 'walkerController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
