"use strict";

Portfolio.factory('ProjectsFactory', function() {
  const Factory = {};

  const activeProjects = [
  {
    name: 'Tsaikka.fi',
    url: `https://tsaikka.fi/`,
    images: [
      'tsaikka-1.png',
      'tsaikka-2.png',
      'tsaikka-3.png',
      'tsaikka-4.png',
      'tsaikka-5.png'
    ],
    title: 'Non-profit organization for Russian-speaking elderly people in Helsinki',
    technologies: ['Wordpress', 'CSS'],
    href: 'tsaikka',
    date: 'November 2020',
    description: `Tsaikka.fi is a website, developed for non-profit organization for Russian-speaking elderly
      people in Helsinki. The development was performed by Alatau oy company, using Wordpress. My role in the
      project was to customize the design and appearance of the website, by adding custom CSS. Colour scheme
      was taken from their previous website, custom icons and little animation effects were added. Font size
      and spacing were increased to suit better the needs of aged people.`
  }, {
    name: 'Alatau oy',
    url: `http://alatau.fi/`,
    images: [
      'alatau-1.png',
      'alatau-2.png',
      'alatau-3.png',
      'alatau-4.png',
      'alatau-5.png'
    ],
    title: 'Web development and hardware repair company in Helsinki',
    technologies: ['Wordpress', 'CSS', 'HTML'],
    href: 'alatau',
    date: 'April 2021',
    description: `This is a website, developed for Alatau oy company, where i had my work practice during
      studies in Careeria. The company focuses on development of websites, using Wordpress. I used my knowledge
      of HTML and CSS to slightly improve and customize appearance of the website. I replaced default images and
      icons with custom ones, slightly changed colour scheme. Also, i decided to add multi-lingual support,
      portfolio section and contact form. This was aimed to provide better customer experience and help to cover
      larger target market.`
  }, {
    name: 'All Movies',
    url: `https://all-movies-1.herokuapp.com/`,
    github: `https://github.com/A-Yerkeshev/all-movies-1`,
    images: [
      'all-movies-1.png',
      'all-movies-2.png',
      'all-movies-3.png',
      'all-movies-4.png'
    ],
    title: 'Movies browsing application using IMDb API',
    technologies: ['Angular', 'Bootstrap', 'Typescript', 'JQuery', 'HTML', 'CSS'],
    href: 'all-movies',
    date: 'October 2019',
    description: `All Movies application is my first application build with leading
      Front-end technologies such as Angular and Bootstrap. Unlike other previous
      applications, the data for this one is not stored anywhere within app, or on
      the server where app is hosted. Instead, all content is loaded dynamically from
      OMDb database through AJAX requests. And moreover, application is using capabilities
      of browser to collect some data about user's activity on the website to greatly
      improve UX.`
  }, {
    name: 'Dashboard App',
    url: `https://dashboard-500.herokuapp.com/`,
    github: `https://github.com/A-Yerkeshev/dashboard`,
    images: [
      'dashboard-1.png',
      'dashboard-2.png',
      'dashboard-3.png',
      'dashboard-4.png',
      'dashboard-5.png'
    ],
    title: 'Posts application, supporting authentification and uploads',
    technologies: ['React', 'JQuery', 'Axios', 'NodeJS', 'HTML', 'CSS'],
    href: 'dashboard',
    date: 'July 2020',
    description: `This application utilizes React framework for front-end, NodeJS
      and JSON-server for back-end and JSONPlaceholder for data. The communication
      between all those is handled by Axios library. The posts data arrives both
      from the database and JSONPlaceholder, then gets processed and displayed to
      user with React. New users can be added to database as well as new posts.
      States of database and application are syncronised. Pictures cannot be uploaded
      due to Heroku server restrictions, but this functionality is simulated using
      possibilities of local storage. Finally the database is exposed for usgae by
      API.`
  }, {
    name: 'Lemon Chat',
    url: `https://lemon-chat-123.herokuapp.com/`,
    github: `https://github.com/A-Yerkeshev/LemonChat`,
    images: [
      'lemon-chat-1.png',
      'lemon-chat-2.png',
      'lemon-chat-3.png',
      'lemon-chat-4.png',
      'lemon-chat-5.png'
    ],
    title: 'Chat application, supporting authentification',
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
    url: `https://neigh-map.herokuapp.com/`,
    github: `https://github.com/A-Yerkeshev/map`,
    images: [
      'neighborhood-map-1.png',
      'neighborhood-map-2.png',
      'neighborhood-map-3.png',
      'neighborhood-map-4.png',
      'neighborhood-map-5.png'
    ],
    title: 'The map that utilizes Google Maps and Wikipedia APIs',
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
  }];

  const inactiveProjects = [
  {
    name: 'Items Catalog',
    url: null,
    github: `https://github.com/A-Yerkeshev/catalog`,
    images: [
      'items-catalog-1.png',
      'items-catalog-2.png',
      'items-catalog-3.png',
      'items-catalog-4.png',
      'items-catalog-5.png',
      'items-catalog-6.png'
    ],
    title: 'The web catalog with database, build on Python',
    technologies: ['Python', 'SQL', 'Flask', 'HTML', 'CSS'],
    href: 'items-catalog',
    date: 'May 2018',
    description: `The online catalog of various items made as fourth project in
      the Udacity graduation course. It's backend part is powered by Python,
      retrieving the data from database via SQLAlchemy library and after necessary
      rendering inserts it into templates created by Flask. The website has
      functionalities to add, edit and delete the items, sort them by category
      and recency, upload the images, login and logout.`
  },  {
    name: 'Real Estate Demo App',
    github: `https://github.com/A-Yerkeshev/RealEstateDemoApp`,
    images: [
      'real-estate-1.png',
      'real-estate-2.png',
      'real-estate-3.png',
      'real-estate-4.png'
    ],
    title: 'Experiment of loading 3D models to a webpage',
    technologies: ['JavaScript', 'Three.js', 'AngularJS', 'HTML', 'CSS'],
    href: 'real-estate',
    date: 'June 2019',
    description: `This application was build as an experiment to see possibilities
      of incorporating dynamic templates rendering with three dimensional data
      representation. AngularJS and Three.js were choden for this task as most
      popular technologies in their operational scope. Three.js turns flat surface
      of the webpage into three dimensinal space without braking the AngularJS
      functionality with dynamic templates rendering. So, basically instead of one
      view we now have two - one plain and one 3D. Therefore the data can be rendered
      in three or two dimensional way depending on its nature.`
  }, {
    name: 'Movie Trailers',
    url: null,
    github: `https://github.com/A-Yerkeshev/movie-trailers`,
    images: [
      'movie-trailers-1.png',
      'movie-trailers-2.png'
    ],
    title: 'Webpage that shows posters and plays trailers',
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
  }, {
    name: 'Protfolio v-1',
    url: null,
    github: `https://github.com/A-Yerkeshev/portfolio-v1`,
    images: [
      'portfolio-v1-1.png',
      'portfolio-v1-2.png'
    ],
    title: 'First version of this website',
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
    github: `https://github.com/A-Yerkeshev/portfolio-v2`,
    images: [
      'portfolio-v2-1.png',
      'portfolio-v2-2.png',
      'portfolio-v2-3.png'
    ],
    title: 'Second version of this website',
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

  const jsfiddles = [
  {
    name: 'Debouncer',
    url: `https://jsfiddle.net/A_Yerkesh/ctb3ga6o/5/`,
    description: `Alternative approach to making debounced functions in JavaScript. This approach allows to
      have debounce wrapper function, instead of debounce constructor function. In other words, you don't need
      to return a function from debounce constructor and then assign it to the event listener. Instead, you can
      just pass your function to the debounce wrapper.`
  }, {
    name: 'Custom Promise',
    url: `https://jsfiddle.net/A_Yerkesh/7fux9gsL/1/`,
    description: `Attempt to recreate ES6 Promise functionality. This is not a complete polyfill, as some
      functionality differs from actual Promise. However, this custom promise can be initialized, chained, resolved
      or rejected just like original ES6 Promise.`
  }
  ];

  let currentProject = null;

  Factory.getActiveProjects = function() {
    return activeProjects;
  };

  Factory.getInactiveProjects = function() {
    return inactiveProjects;
  };

  Factory.getCurrentProject = function() {
    return currentProject;
  };

  Factory.getFiddles = function() {
    return jsfiddles;
  }

  Factory.setCurrentProject = function(project) {
    currentProject = project;
  };

  return Factory;
});
