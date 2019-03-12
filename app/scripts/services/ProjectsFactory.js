Portfolio.factory('ProjectsFactory', function() {
  var Factory = {};

  var projects = [
  {
    name: 'Movie Trailers',
    url: 'https://movie-trailers-webpage.herokuapp.com/'
  }, {
    name: 'Items Catalog',
    url: 'https://itemscatalog.herokuapp.com/'
  }, {
    name: 'Neighborhood Map',
    url: 'https://neigh-map.herokuapp.com/'
  }, {
    name: 'Lemon Chat',
    url: 'https://lemon-chat-123.herokuapp.com/'
  },];

  Factory.getAllProjects = function() {
    return projects
  };

  return Factory;
});
