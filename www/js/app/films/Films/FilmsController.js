angular.module('FilmsModule')

.controller('FilmsController', function($scope, Film, FilmService) {

    var initView = function (){
        FilmService.getFilms();
        if(FilmService.films){
            $scope.films = FilmService.films;
        }else {
            $scope.films = [];
        }
    };

    $scope.$on('$ionicView.loaded', function(){
        initView();
    });


});