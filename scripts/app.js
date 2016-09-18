var jquery = require('jquery');
var angular = require('angular');
var designProjects = require('./design.json');

var numPortraits = 19;
var numDFW = 7;

var folioApp = angular.module("folioApp", []);

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
