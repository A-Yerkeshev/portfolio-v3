Portfolio.factory('ProjectsFactory', function() {
  var Factory = {};

  var activeProjects = [
  {
    name: 'Lemon Chat',
    url: 'https://lemon-chat-123.herokuapp.com/',
    github: 'https://github.com/A-Yerkeshev/LemonChat',
    images: [
      {
        src:'/images/lemon-chat/lemon-chat-1.png',
        descr: `Application is designed to represent the functionality of chat
          and handles all types of necessary interaction types between users.`
      }, {
        src:'/images/lemon-chat/lemon-chat-2.png',
        descr: `The classical for social networks "friends" system was implemented.
          It allowed to organize and systemize the process of initiating new chats
          between users, as well as management of existing ones.`
      }, {
        src:'/images/lemon-chat/lemon-chat-3.png',
        descr: `Chats themselves follow standard practices and besides communication
          functionality provide user with some additional data.`
      }, {
        src:'/images/lemon-chat/lemon-chat-4.png',
        descr: `In order to keep chats organized with participants, the hirerachial
          structure of administrators priviledges was implimented.`
      }, {
        src:'/images/lemon-chat/lemon-chat-5.png',
        descr: `Application provides some room for customization of profile for
          registered users, in particular it allowes to change the profile image
          or put some information to profile.`
      }
    ],
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
    github: 'https://github.com/A-Yerkeshev/map',
    images: [
      {
        src: '/images/neighborhood/neighborhood-1.png',
        descr: `Map utilizes APIs to retrieve data from various sources and presents
          it to the user in an interactable manner.`
      }, {
        src: '/images/neighborhood/neighborhood-2.png',
        descr: `Map has some hard-coded locations that are visually present in a
          form of markers. Sidebar on left hand side allows to filter the markers
          by the category they belong.`
      }, {
        src: '/images/neighborhood/neighborhood-3.png',
        descr: `Also, by clicking the marker or by selecting its name from the
          list on the left, the map zoomes in to it and displays information about
          place to the user, that is dinamically retrieved from the API.`
      }, {
        src: '/images/neighborhood/neighborhood-4.png',
        descr: `Besides fixed markers, map allows user to retrieve relevant
          information about any place, by simply typing its name to the search box.`
      }, {
        src: '/images/neighborhood/neighborhood-5.png',
        descr: `Search box dinamically gives suggestions to the user, depending
          on current zoom location.`
      }
    ],
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
    github: 'https://github.com/A-Yerkeshev/catalog',
    images: [
      {
        src: '/images/items-catalog/items-catalog-1.png',
        descr: `Online catalog of items retrieves data from database and renders
          it on the page using Python libraries and frameworks.`
      }, {
        src: '/images/items-catalog/items-catalog-2.png',
        descr: `All items on the website are sorted by category and most recent
          ones are displayed on the frontpage.`
      }, {
        src: '/images/items-catalog/items-catalog-3.png',
        descr: `Each item must have a name and category and optionally can have
          an image and description.`
      }, {
        src: '/images/items-catalog/items-catalog-4.png',
        descr: `In order to add your own items to the catalog, user should complete
          simple registration process.`
      }, {
        src: '/images/items-catalog/items-catalog-5.png',
        descr: `Registered users can access the page for creation of items, that
          is otherwise hidden.`
      }, {
        src: '/images/items-catalog/items-catalog-6.png',
        descr: `Users have a possibility to edit and delete items they created any
          time they want.`
      },
    ],
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
    github: 'https://github.com/A-Yerkeshev/movie-trailers',
    images: [
      '/images/movie-trailers/movie-trailers-1.png'
    ],
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
    url: null,
    github: 'https://github.com/A-Yerkeshev/portfolio-v1',
    images: [
      '/images/portfolio/portfolio-1.png'
    ],
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
    url: null,
    github: 'https://github.com/A-Yerkeshev/portfolio-v2',
    images: [
      '/images/portfolio-v2/portfolio-v2-1.png'
    ],
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
