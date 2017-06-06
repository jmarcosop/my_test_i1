angular.module('FilmsModule')

.controller('FilmDetailsController', function($scope, Film, FilmService, $stateParams){

    $scope.data = {};
    $scope.data.films = FilmService.films;

    var initView = function () {
        $scope.data.currentPage = FilmService.getFilmPosition($stateParams.filmTitle);
        console.log(FilmService.getFilmPosition($stateParams.filmTitle));
    };

    var setupSlider = function() {
        $scope.sliderOptions = {};
        $scope.sliderDelegate = null;

        $scope.$watch('data.sliderDelegate', function(newVal, oldVal){
            if(newVal != null){
                $scope.data.sliderDelegate.on('slideChangeEnd', function(){
                    $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
                });
            }
        });
    }

    $scope.$on('$ionicView.loaded', function(){
        initView();
    });
})