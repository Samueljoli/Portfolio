$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#F8F8F8', '#4BBFC3', '#7BAABE'],
    anchors: ['Home', 'Work', 'Technologies', 'Contact'],
    afterLoad: function(anchorLink, index) {
      if(index == 2) {
        $('#work').fadeIn('slow').animate({
          left: '0'
        }, {duration: 'slow', queue:false}, function() {

        });
        $('#workinfo').fadeIn('slow').animate({
          right: '0'
        }, {duration: 'slow', queue:false}, function(){

        });
      }
    }
  });
});





var ScrollApp = angular.module('ScrollApp', []);

ScrollApp.controller('PreviewController', function($scope) {
  $scope.$watch('input', function(val) {
    $scope.output = val;
}, true);

  $scope.input = "Insert your most insanely clever, thought provoking quote here."
  $scope.output = ""
});

ScrollApp.filter('html', function($sce) {return $sce.trustAsHtml; });




