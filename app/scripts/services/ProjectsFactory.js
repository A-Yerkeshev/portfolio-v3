Portfolio.factory('ProjectsFactory', function() {
  var Factory = {};

  var activeProjects = [
  {
    name: 'Lemon Chat',
    url: 'https://lemon-chat-123.herokuapp.com/',
    image: '/images/lemon-chat.png',
    title: 'Fancy looking chat application',
    technologies: ['JavaScript', 'QJuery', 'AngularJS', 'AnimeJS', 'HTML', 'CSS']
  }, {
    name: 'Neighborhood Map',
    url: 'https://neigh-map.herokuapp.com/',
    image: '/images/neighborhood.png',
    title: 'The map that utilizes various APIs',
    technologies: ['JavaScript', 'KnockoutJS', 'HTML', 'CSS', 'API']
  }, {
    name: 'Items Catalog',
    url: 'https://itemscatalog.herokuapp.com/',
    image: '/images/items-catalog.png',
    title: 'The web catalog of various items',
    technologies: ['Python', 'SQL', 'Flask', 'HTML', 'CSS']
  }, {
    name: 'Movie Trailers',
    url: 'https://movie-trailers-webpage.herokuapp.com/',
    image: '/images/movie-trailers.png',
    title: 'Posters and trailers about movies',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript']
  }];

  var inactiveProjects = [
  {
    name: 'Protfolio v-1',
    image: '/images/portfolio.png',
    title: 'First version of portfolio',
    technologies: ['HTML', 'CSS']
  }, {
    name: 'Protfolio v-2',
    image: '/images/portfolio-v2.png',
    title: 'Second version of portfolio',
    technologies: ['JavaScript', 'HTML', 'CSS']
  }];

  Factory.getActiveProjects = function() {
    return activeProjects
  };

  Factory.getInactiveProjects = function() {
    return inactiveProjects
  };

  return Factory;
});
