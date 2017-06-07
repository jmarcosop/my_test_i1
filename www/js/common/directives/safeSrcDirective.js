angular.module('UtilsModule', [])

    .constant('defaultImg', "img/film.png")

    .controller('safeSrcController', ['$scope', function($scope){
        var img = new Image();
        var currentSrc;

        this.onLoadSuccess = function(callback){
            img.onload = function(){
                callback(this.src);
            };
        };

        this.onLoadError = function(callback){
            img.onerror = function(e){
                callback(e);
            };
        };

        this.updateSrc = function(src){
            if(angular.isDefined(src) && src.length && currentSrc != src ){
                currentSrc = src;
                img.src = currentSrc;
            }
        };

        $scope.$on('$destroy', function(){
            if(img){
                img = null;
            }
        })
    }])

    .directive('safeSrc', ['defaultImg', function(defaultImg){
        return {
            restrict: "A",
            controller: 'safeSrcController',
            scope: {
                safeSrc: '@'
            },
            link: function(scope, element, attrs, safeSrcController){
                element[0].src = defaultImg;

                safeSrcController.onLoadSuccess(function(src){
                    element[0].src = src;
                });

                safeSrcController.updateSrc(scope.safeSrc);

                scope.$watch('safeSrc', function(newVal, oldVal){
                    safeSrcController.updateSrc(scope.safeSrc);
                });
            }
        }
    }])
    .directive('safeBgSrc', ['defaultImg', function(defaultImg){
        return {
            restrict: "A",
            controller: 'safeSrcController',
            scope: {
                safeBgSrc: '@'
            },
            link: function(scope, element, attrs, safeSrcController){

                element.css({
                    'backgroundImage': 'url('+ defaultImg +')',
                    'backgroundSize': 'cover'
                });

                safeSrcController.onLoadSuccess(function(src){
                    element.css({
                        'backgroundImage': 'url('+ src +')',
                        'backgroundSize': 'cover'
                    });
                });

                safeSrcController.updateSrc(scope.safeBgSrc);

                scope.$watch('safeBgSrc', function(newVal, oldVal){
                    safeSrcController.updateSrc(scope.safeBgSrc);
                });
            }
        }
    }])