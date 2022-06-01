"use strict";

Portfolio.controller('ProjectsController', function($scope, $window, $location, ProjectsFactory) {
  // Get project id from url
  const fullUrl = $location.url();
  const projectId = fullUrl.substring(fullUrl.lastIndexOf('/')+1);

  // If project is found - set it as current
  const currentProject = ProjectsFactory.getProject(projectId);
  if (!currentProject) {
    $location.url('projects');
  }

  $scope.currentProject = currentProject;
  $scope.activeProjects = ProjectsFactory.getActiveProjects();
  $scope.inactiveProjects = ProjectsFactory.getInactiveProjects();
  $scope.jsfiddles = ProjectsFactory.getFiddles();

  $scope.showTitle = function(element) {
    element.style.opacity = 1;
  };

  $scope.hideTitle = function(element) {
    element.style.opacity = 0;
  };

  $scope.setCurrentProject = function(project) {
    ProjectsFactory.setCurrentProject(project);
  };

  $scope.newTab = function(url) {
    $window.open(url, '_blank');
  };

  $scope.newTabByImage = function(project) {
    if (project.url) {
      $window.open(project.url, '_blank');
    } else {
      $window.open(project.github, '_blank');
    }
  };

});
