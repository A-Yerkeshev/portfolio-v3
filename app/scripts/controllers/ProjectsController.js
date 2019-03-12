Portfolio.controller('ProjectsController', function($scope) {
  $scope.projects = ProjectsService.getAllProjects();
});
