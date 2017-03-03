 angular.module('myApp');
     myApp.service('MenuService',menuService);
 menuService.$inject = ['$http'];

    function menuService($http) {

        this.getCategory = function () {
            return $http.get('products.json');
        };
    };


 myApp.service('EventService',eventService);
 eventService.$inject = ['$http'];

 function eventService($http) {

     this.getEvents = function () {
         return $http.get('event.json');
     };
 }

