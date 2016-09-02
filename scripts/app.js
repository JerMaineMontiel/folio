var numPortraits = 19;
var numDFW = 7;

var folioApp = angular.module("folioApp", ['ngRoute']);

folioApp.config(function($routeProvider){
  //route for resume
  $routeProvider.when('/resume', {
    templateUrl: 'templates/resume.html',
    controller: 'mainController'
  })
  //route for the photo folio
  .when('/photos/', {
    templateUrl: 'templates/photos.html',
    controller: 'mainController'
  })
  //route for the design page
  .when('/design', {
    templateUrl: 'templates/design.html',
    controller: 'mainController'
  });
});

folioApp.controller('mainController', function($scope){

  $scope.portraits = [];
  $scope.dfwphotos = [];
  $scope.designProj = designProjects;
  
  for(x = numPortraits; x > 0; x--)
    {
      $scope.portraits[numPortraits-x] = "assets/photos/portraits/" + x + ".jpg";
    }

  for(y = numDFW; y > 0; y--)
    {
      $scope.dfwphotos[numDFW-y] = "assets/photos/dfw/" + y + ".jpg";
    }
});