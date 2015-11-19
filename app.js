var ScrollApp = angular.module('ScrollApp', []);

ScrollApp.controller('PreviewController', function($scope) {
  $scope.$watch('input', function(val) {
    $scope.output = val;
  }, true);

  $scope.input = "Insert your most insanely clever, thought provoking quote here."
  $scope.output = ""
});

ScrollApp.filter('html', function($sce) {return $sce.trustAsHtml; });



$(document).ready(function() { 
  $('#fullpage').fullpage({
    sectionsColor: ['#F8F8F8', 'black', '#7BAABE', 'black', 'gray', 'deeppink', 'lightblue'],
    anchors: ['Home', 'Work', 'Downtogo', 'ArtOpp', 'GoogleCLI', 'SummerFest', 'Contact'],
    afterLoad: function(anchorLink, index) {
      if(index == 3) {
        $('#work').fadeIn('slow').animate({ //CHECK TO SEE IF I CAN APPEND TWO JQUERYS WITHIN THE SAME PARENTHESIS
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











