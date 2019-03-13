Portfolio.controller('ProjectsController', function($scope, ProjectsFactory) {
  $scope.activeProjects = ProjectsFactory.getActiveProjects();
  $scope.inactiveProjects = ProjectsFactory.getInactiveProjects();

  $scope.showTitle = function(element) {
    element.style.opacity = 1;
  };

  $scope.hideTitle = function(element) {
    element.style.opacity = 0;
  };
});
