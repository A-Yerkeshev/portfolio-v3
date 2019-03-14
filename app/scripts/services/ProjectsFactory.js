Portfolio.factory('ProjectsFactory', function() {
  var Factory = {};

  var activeProjects = [
  {
    name: 'Lemon Chat',
    url: 'https://lemon-chat-123.herokuapp.com/',
    image: '/images/lemon-chat.png',
    title: 'Fancy looking chat application',
    technologies: ['JavaScript', 'QJuery', 'AngularJS', 'AnimeJS', 'HTML', 'CSS'],
    href: 'lemon-chat'
  }, {
    name: 'Neighborhood Map',
    url: 'https://neigh-map.herokuapp.com/',
    image: '/images/neighborhood.png',
    title: 'The map that utilizes various APIs',
    technologies: ['JavaScript', 'KnockoutJS', 'HTML', 'CSS', 'API'],
    href: 'neighborhood-map'
  }, {
    name: 'Items Catalog',
    url: 'https://itemscatalog.herokuapp.com/',
    image: '/images/items-catalog.png',
    title: 'The web catalog of various items',
    technologies: ['Python', 'SQL', 'Flask', 'HTML', 'CSS'],
    href: 'items-catalog'
  }, {
    name: 'Movie Trailers',
    url: 'https://movie-trailers-webpage.herokuapp.com/',
    image: '/images/movie-trailers.png',
    title: 'Posters and trailers about movies',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
    href: 'movie-trailers'
  }];

  var inactiveProjects = [
  {
    name: 'Protfolio v-1',
    url: 'https://github.com/A-Yerkeshev/portfolio-v1',
    image: '/images/portfolio.png',
    title: 'First version of portfolio',
    technologies: ['HTML', 'CSS'],
    href: 'portfolio-v1'
  }, {
    name: 'Protfolio v-2',
    url: 'https://github.com/A-Yerkeshev/portfolio-v2',
    image: '/images/portfolio-v2.png',
    title: 'Second version of portfolio',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    href: 'portfolio-v2'
  }];

  var currentProject = null;

  Factory.getActiveProjects = function() {
    return activeProjects
  };

  Factory.getInactiveProjects = function() {
    return inactiveProjects
  };

  Factory.getCurrentProject = function() {
    return currentProject;
  };

  Factory.setCurrentProject = function(project) {
    currentProject = project;
  };

  return Factory;
});
