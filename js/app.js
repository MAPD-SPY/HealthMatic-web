 
angular.module('myapp',['ui.router']).controller('examCtrl',function($scope,$rootScope,$http) {


  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  $scope.toggleSidebar=false;

  $scope.toggleSidebar = function() {
    $scope.toggle = !$scope.toggle;
          // $('#wrapper').toggleClass('inactive');
          $('#wrapper').addClass('inactive');
          $('#wrapper').removeClass('active');



        };


        $scope.getData=function(){
          $http.get('https://jsonplaceholder.typicode.com/posts').
          then(function(response) {
            $scope.data = response.data;
          }, function errorCallback(response) {
  
          alert('Sorry unable to reach server');
          });

        };
        $scope.getData();


        $scope.showBody=function (data) {

                //alert('test');
                $scope.selectedtitle=data.title;
                $scope.body=data.body;
                $scope.selectedid=data.userId;

                $http.get('https://jsonplaceholder.typicode.com/users/'+$scope.selectedid).
                then(function(response) {
                  console.log('https://jsonplaceholder.typicode.com/users/'+$scope.selectedid);

                  $scope.data1 = response.data;
                  console.log($scope.data1);
                  $scope.username='Name  : '+$scope.data1.name;
                   // alert(width);
                   if(width<550)
                   {
                     $scope.toggleSidebar();   
                   }
                   
                   
                 }, function errorCallback(response) {
  
                  alert('Sorry unable to get User Information');
                  });


              };


            });



/*Menu-toggle*/
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");

});





