var module = angular.module('listApp'[]);
var controller = module.controller('ListController',initController);
function initController($scope){
    $scope.items = ['First Item'];
    $scope.addItem = function() {
        if ($scope.NewItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }
    }
}