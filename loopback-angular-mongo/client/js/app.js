var myApp = angular.module("myItems", ['lbServices']);
myApp.controller("itemsController", function($scope, $http, Item) {
    $scope.items = Item.find();
});