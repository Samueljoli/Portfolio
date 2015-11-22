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
    sectionsColor: ['#F8F8F8', 'black', '#7BAABE', 'black', 'gray', 'deeppink', 'lightblue'],
    anchors: ['Home', 'Work', 'Downtogo', 'ArtOpp', 'GoogleCLI', 'SummerFest', 'Contact'],
    
    // CALL BACKS
    afterLoad: function(anchorLink, index) {
      if(index == 3) {
        $('.down-to-go').fadeIn('slow').animate({ 
          left: '0'
        }, {duration: 'slow', queue:false}, function() {

        });
        $('.ruby-web').fadeIn('slow').animate({
          right: '0'
        }, {duration: 'slow', queue:false}, function(){

        });
      }
console.log(index)
      if(index == 6) { 
        console.log($('.work'))
        $('.summerfest').fadeIn('slow').animate({ 
          left: '0'
        }, {duration: 'slow', queue:false}, function() {

        });
        $('.branding').fadeIn('slow').animate({
          right: '0'
        }, {duration: 'slow', queue:false}, function(){

        });
      }

    }
  });
});



