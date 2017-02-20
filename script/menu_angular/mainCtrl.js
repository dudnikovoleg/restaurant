'use strict';
var myApp = angular.module('myApp',[]);


myApp.controller('MenuCtrl',menuCtrl);
    menuCtrl.$inject = ['$scope','MenuService'];

        function menuCtrl($scope, menuService) {
            var meat = 'button__meat';

            init();
            /*фильтр запроса для стартовой категории*/
                function init() {
                    menuService
                        .getCategory()
                        .then(function (response) {
                            $scope.items = response.data.filter(function (elem) {
                                return (elem.id) === meat;
                            });
                        });
                }
                /*фильтрует запрос меню по категориям*/
               $scope.getId = function  (event) {
                   menuService
                       .getCategory()
                       .then(function (response) {
                           $scope.items = response.data.filter(function (elem) {
                               return (elem.id) === event.target.id;
                           });
                       });
               }
        }

myApp.controller('EventCtrl',eventCtrl);
    eventCtrl.$inject = ['$scope', 'EventService'];

    function eventCtrl($scope, eventService) {
        eventService
            .getEvents()
            .then(function (response) {
                $scope.itemsEvent = response.data;
                console.log($scope.itemsEvent)
            })

    }

