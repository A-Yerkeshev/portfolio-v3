Portfolio.factory('ProjectsFactory', function() {
  var Factory = {};

  var projects = [
  {
    name: 'Movie Trailers',
    url: 'https://movie-trailers-webpage.herokuapp.com/',
    image: '/images/movie-trailers.png',
    title: 'Posters and trailers about movies',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript']
  }, {
    name: 'Items Catalog',
    url: 'https://itemscatalog.herokuapp.com/',
    image: '/images/items-catalog.png',
    title: 'The web catalog of various items',
    technologies: ['Python', 'SQL', 'Flask', 'HTML', 'CSS']
  }, {
    name: 'Neighborhood Map',
    url: 'https://neigh-map.herokuapp.com/',
    image: '/images/neighborhood.png',
    title: 'The map that utilizes various APIs',
    technologies: ['JavaScript', 'KnockoutJs', 'HTML', 'CSS', 'API']
  }, {
    name: 'Lemon Chat',
    url: 'https://lemon-chat-123.herokuapp.com/',
    image: '/images/lemon-chat.png',
    title: 'Messenger application',
    technologies: ['JavaScript', 'AngularJs', 'AnimeJS', 'HTML', 'CSS']
  }];

  Factory.getAllProjects = function() {
    return projects
  };

  return Factory;
});
