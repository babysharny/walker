'use strict';

app.controller('walkerController', ['$scope', 'TreeService', function($scope, TreeService) {

  $scope.tree = TreeService.getTree();

  $scope.prev = [];
  $scope.curr = $scope.tree;

  $scope.goBack = function() {
    $scope.curr = $scope.prev.pop();
  };

  $scope.selectNode = function(node) {
    $scope.prev.push($scope.curr);
    $scope.curr = node;
  };

}]);
