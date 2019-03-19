Portfolio.factory('ProjectsFactory', function() {
  var Factory = {};

  var activeProjects = [
  {
    name: 'Lemon Chat',
    url: 'https://lemon-chat-123.herokuapp.com/',
    image: '/images/lemon-chat.png',
    title: 'Fancy looking chat application',
    technologies: ['JavaScript', 'QJuery', 'AngularJS', 'AnimeJS', 'HTML', 'CSS'],
    href: 'lemon-chat',
    date: 'March 2019',
    description: `This application aimed to represent the functionality of a
      messenger accompained with some animations that would make the interface
      more dynamic and responsive to user's actions. It has a sufficient
      functionality to expand and manipulate one's network as well as thr system
      of priviliges that would organize and easen the process of managing each
      particular chat and its participants. App is built using primarily AngularJS
      and AnimeJS. The manipulations of the DOM is performed by JQuery and
      scaffolding is provided by Yeoman.`
  }, {
    name: 'Neighborhood Map',
    url: 'https://neigh-map.herokuapp.com/',
    image: '/images/neighborhood.png',
    title: 'The map that utilizes various APIs',
    technologies: ['JavaScript', 'KnockoutJS', 'HTML', 'CSS', 'API'],
    href: 'neighborhood-map',
    date: 'June 2018',
    description: `Neighborhhod map project was done during graduation in Udacity.
      The main point of the application is to retrieve different information from
      various APIs: Wikipedia, GoogleImages and GoogleMaps APIs in this case, for
      future rendering of them in JavaScript and inserting to the web page in the
      form of templates using MVC KnockoutJS framework. It has both hard-coded
      locations and their markers with the possibilty to manage them according to
      selected filters, as well as functionality to search any given place by its
      name and retrieve corresponding information about it from APIs.`
  }, {
    name: 'Items Catalog',
    url: 'https://itemscatalog.herokuapp.com/',
    image: '/images/items-catalog.png',
    title: 'The web catalog of various items',
    technologies: ['Python', 'SQL', 'Flask', 'HTML', 'CSS'],
    href: 'items-catalog',
    date: 'May 2018',
    description: `The online catalog of various items made as fourth project in
      the Udacity graduation course. It's backend part is powered by Python,
      retrieving the data from database via SQLAlchemy library and after necessary
      rendering inserts it into templates created by Flask. The website has
      functionalities to add, edit and delete the items, sort them by category
      and recency, upload the images, login and logout.`
  }, {
    name: 'Movie Trailers',
    url: 'https://movie-trailers-webpage.herokuapp.com/',
    image: '/images/movie-trailers.png',
    title: 'Posters and trailers about movies',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
    href: 'movie-trailers',
    date: 'April 2018',
    description: `Movie trailers website was the first project done during
      graduation in Udacity. It shows posters of various movies and plays their
      trailers when poster is clicked. The goal of the project is to retrieve
      data from different sources through Python and then use it to initiate
      various instances of Python class object. All the process of instantiating
      new objects and rendering them on the webpage is automatizated, so each new
      movie on the webpage requires only data input to be initialized. The
      front-end templates were provided by Udacity and back-end was written by
      instructions.`
  }];

  var inactiveProjects = [
  {
    name: 'Protfolio v-1',
    url: 'https://github.com/A-Yerkeshev/portfolio-v1',
    image: '/images/portfolio.png',
    title: 'First version of portfolio',
    technologies: ['HTML', 'CSS'],
    href: 'portfolio-v1',
    date: 'April 2018',
    description: `The first version of portfolio website. This was done as second
      project in Udacity graduation course. Therefore it had only empty slots for
      the future projects. It built exclusively with HTML and CSS, even the dynamic
      parts of the webpage do not include usage of JavaScript. The main goal was to
      get familiar with HTML and CSS, play with responsive design as well. The items
      are aligned on the webpage the way that they change their position in
      accordance with the width of the device on which the website is viewed.`
  }, {
    name: 'Protfolio v-2',
    url: 'https://github.com/A-Yerkeshev/portfolio-v2',
    image: '/images/portfolio-v2.png',
    title: 'Second version of portfolio',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    href: 'portfolio-v2',
    date: 'July 2018',
    description: `Second version of portfolio website. Unlike the virst version
      which incorporated usage of only HTML and CSS, this version focuses mainly on
      plain JavaScript, aiming on making elements of the website more animated
      and responsive to user's actions. The layout of the website allows the user
      to see detailed information about one particular project at a time, visit the
      website by it's address and open the website directly on the portfolio
      webpage. Even that no MVC framework was used in this project the pattern of
      JavaScript files follows this logic of MVC principle.`
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
