function moviesController($scope, movies) {
    $scope.movies;
    movies.getMovies().then(function (response) {
        $scope.movies = response.data;
    }, function (error) {
        console.error(error);
    });
}

function singleController($scope, movies, $location, $routeParams) {
    $scope.movies;
    movies.getMovies().then(function (response) {
        $scope.movies = response.data;
        $scope.movieSingle = $routeParams.singleId;
    }, function (error) {
        console.error(error);
    });
}
