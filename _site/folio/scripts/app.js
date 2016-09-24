var jquery = require('jquery');
var angular = require('angular');
var designProjects = require('./design.json');

var numPhotos = 26;

var folioApp = angular.module("folioApp", []);

folioApp.controller('mainController', ['$scope', '$location', '$anchorScroll', 
  function($scope, $location, $anchorScroll){
    
    $scope.scrollTo = function(id){
      $location.hash(id);
      $anchorScroll().animate();
    };

    $scope.photos = [];
    $scope.designProj = designProjects;

    var x = 1;
    while( x <= numPhotos )
      {
        $scope.photos[x-1] = "assets/photos/" + x + ".jpg";
        x++;
      }
}]);
