var Movies = angular.module('moviesApp', ['ngRoute'])
.controller('moviesController', ['$scope', 'movies', moviesController])
.controller('singleController', ['$scope', 'movies','$location', '$routeParams', singleController])
.service('movies', movies)
.directive('moviesCard', moviesCard);

Movies.config(function($routeProvider){
  $routeProvider.when('/' , {
    templateUrl : 'partial/movies.html',
    controller: 'moviesController'
  })
  $routeProvider.when('/single/:singleId',{
    templateUrl : 'partial/single.html',
    controller: 'singleController'
  })
  $routeProvider.otherwise({ redirectTo : '/' });
})
