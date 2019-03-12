Portfolio.controller('ProjectsController', function($scope, ProjectsFactory) {
  $scope.projects = ProjectsFactory.getAllProjects();

  $scope.showTitle = function(element) {
    element.style.opacity = 1;
  };

  $scope.hideTitle = function(element) {
    element.style.opacity = 0;
  };
});
