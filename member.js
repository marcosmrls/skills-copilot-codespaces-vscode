function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '='
    },
    controller: function($scope) {
      $scope.showDetails = false;
      $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
      };
    }
  };
}