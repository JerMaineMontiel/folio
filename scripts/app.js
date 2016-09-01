var folioApp = angular.module("folioApp", ['ngRoute']);

folioApp.config(function($routeProvider){
  //route for resume
  $routeProvider.when('/resume', {
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
    $scope.photos = [];
    
    for(x = 20; x > 0; x--)
      {
        $scope.photos[20-x] = "assets/photos/" + x + ".jpg";
      }
});