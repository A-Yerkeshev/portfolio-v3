Portfolio.controller('ProjectsController', function($scope, ProjectsFactory) {
  $scope.currentProject = ProjectsFactory.getCurrentProject();
  $scope.activeProjects = ProjectsFactory.getActiveProjects();
  $scope.inactiveProjects = ProjectsFactory.getInactiveProjects();

  $scope.showTitle = function(element) {
    element.style.opacity = 1;
  };

  $scope.hideTitle = function(element) {
    element.style.opacity = 0;
  };

  $scope.setCurrentProject = function(project) {
    ProjectsFactory.setCurrentProject(project)
  };
});
