angular.module('FilmsModule', ['FilmModel', 'OMDBFilmsModule'])

.config(function($stateProvider){

    $stateProvider
        .state('app.films', {
            url: '/films',
            views: {
                'content':{
                    templateUrl: 'js/app/films/Films/films.html',
                    controller: 'FilmsController'
                }
            }
        })

        .state('app.films-detail', {
            url: '/films-detail/:filmTitle',
            views: {
                'content':{
                    templateUrl: 'js/app/films/FilmsDetail/films-detail.html',
                    controller: 'FilmDetailsController',
                    context : {
                        film: function(FilmService, $stateParams){
                            return FilmService.getFilm($stateParams);
                        }
                    }
                }
            },
            controller: function(FilmService, $scope, $stateParams){
                $scope.film = FilmsService.getFilm($stateParams.filmTitle);
            }
        });
});