// ANGULAR APPLICATION

var ScrollApp = angular.module('ScrollApp', []);

ScrollApp.controller('PreviewController', function($scope) {
  $scope.$watch('input', function(val) {
    $scope.output = val;
  }, true);

  $scope.input = "Insert clever and thought provoking quote here."
  $scope.output = ""
});

ScrollApp.filter('html', function($sce) {return $sce.trustAsHtml; });


// FULL PAGE JS
$(document).ready(function() { 
  $('#fullpage').fullpage({
    sectionsColor: ['#F8F8F8', 'black', '#7BAABE', 'white', 'gray', 'deeppink', 'lightblue'],
    anchors: ['Home', 'Work', 'Downtogo', 'ArtOpp', 'GoogleCLI', 'SummerFest', 'Contact'],
    
    // CALL BACKS
    afterLoad: function(anchorLink, index) {
      if(index == 3) {
        $('#work').fadeIn('slow').animate({ 
          left: '0'
        }, {duration: 'slow', queue:false}, function() {

        });
        $('#workinfo').fadeIn('slow').animate({
          right: '0'
        }, {duration: 'slow', queue:false}, function(){

        });
      }
console.log(index)
      if(index == 6) { 
        console.log($('#work2'))
        $('#work2').fadeIn('slow').animate({ 
          left: '0'
        }, {duration: 'slow', queue:false}, function() {

        });
        $('#workinfo2').fadeIn('slow').animate({
          right: '0'
        }, {duration: 'slow', queue:false}, function(){

        });
      }

    }
  });
});



