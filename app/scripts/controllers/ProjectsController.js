Portfolio.controller('ProjectsController', function($scope, ProjectsFactory) {
  $scope.projects = ProjectsFactory.getAllProjects();
});
