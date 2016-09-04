var jquery = require('jquery');
var angular = require('angular');
var animate = require('angular-animate');
var route = require('angular-route');
var designProjects = require('./design.json');

var numPortraits = 19;
var numDFW = 7;

var folioApp = angular.module("folioApp", ['ngRoute', 'ngAnimate']);

folioApp.config(function ($routeProvider) {
  //route for home
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html'
  //route for the resume
  }).when('/resume', {
    templateUrl: 'templates/resume.html'
  })
  //route for the photo folio
  .when('/photos', {
    templateUrl: 'templates/photos.html'
  })
  //route for the design page
  .when('/design', {
    templateUrl: 'templates/design.html'
  });
});

folioApp.controller('mainController', function($scope){

  $scope.portraits = [];
  $scope.dfwphotos = [];
  $scope.designProj = designProjects;
  
  var x = 1;
  while( x <= numPortraits )
    {
      $scope.portraits[x-1] = "assets/photos/portraits/" + x + ".jpg";
      x++;
    }

  var y = 1;
  while( y <= numDFW )
    {
      $scope.dfwphotos[y-1] = "assets/photos/dfw/" + y + ".jpg";
      y++;
    }
});