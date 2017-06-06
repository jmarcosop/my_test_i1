angular.module('FilmsModule')

.controller('FilmDetailsController', function($scope, Film, FilmService, $stateParams){

    var initView = function () {
        console.log(FilmService.getFilm($stateParams.filmTitle));
        $scope.film = FilmService.getFilm($stateParams.filmTitle);
    };

    $scope.$on('$ionicView.loaded', function(){
        initView();
    });
})