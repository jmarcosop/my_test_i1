angular.module('StorageModule', [])

.constant('storageKey', 'storage_')

.factory('storageService', ['$window', 'storageKey', function($window, storageKey){

    var storageService = {};
    var getStorageKey = function(key){
        return storageKey + key;
    }
    
    storageService.setItem = function(key, object){
        $window.localStorage.setItem(getStorageKey(key), angular.toJson(object));
    };

    storageService.getItem = function(key){
        var jsonObject = $window.localStorage.getItem(getStorageKey(key));
        return jsonObject ? angular.fromJson(jsonObject) : null;
    };

    return storageService;
}])