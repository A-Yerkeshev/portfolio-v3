Portfolio.factory('ProjectsFactory', function() {
  var Service = {};

  var projects = ['test1', 'test2', 'test3'];

  Service.getAllProjects = function() {
    return projects
  };

  return Service;
});
