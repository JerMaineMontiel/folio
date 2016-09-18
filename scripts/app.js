var jquery = require('jquery');
var angular = require('angular');
var designProjects = require('./design.json');

var numPhotos = 26;

var folioApp = angular.module("folioApp", []);

folioApp.controller('mainController', function($scope){

    $scope.photos = [];
    $scope.designProj = designProjects;

    var x = 1;
    while( x <= numPhotos )
      {
        $scope.photos[x-1] = "assets/photos/" + x + ".jpg";
        x++;
      }
});

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
