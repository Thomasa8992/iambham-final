angular.module("myApp", ["ngRoute"])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../views/home.html"
    })
    .when("/single/:id", {
        templateUrl : "../views/single.html"
    });
})
.controller('HomeController', function($scope, $http, $location) {
    $http.get("http://localhost:3000/api/v1/movies")
    .then(function(response) {
        $scope.movies = response.data;
    });
})
.controller('SingleController', function($scope, $http, $routeParams, $sce) {
    var id = $routeParams.id;
    $http.get("http://localhost:3000/api/v1/movies/" + id)
    .then(function(response) {
        

    $scope.movies = response.data;

    $scope.url = $sce.trustAsResourceUrl($scope.movies.trailer);
    });
})
