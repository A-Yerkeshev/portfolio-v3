Portfolio.factory('ProjectsFactory', function() {
  var Factory = {};

  var activeProjects = [
  {
    name: 'All Movies',
    url: `https://all-movies-1.herokuapp.com/`,
    github: `https://github.com/A-Yerkeshev/all-movies-1`,
    images: [
      {
        src: '/images/all-movies/all-movies-1.png',
        descr: `This application untilizes AJAX requests and browser's local
          storage to collect the data from the server and from user's interactions
          with website to build the customised content. Application is created with
          Angular and Bootstrap.`
      }, {
        src: '/images/all-movies/all-movies-2.png',
        descr: `Local storage of the browser keeps track of user's activity
          on the website to streighten UX. Bootstrap takes care of responsiveness
          of the content for different devices.`
      }, {
        src: '/images/all-movies/all-movies-3.png',
        descr: `User has an option to perform a search by keywords. This sends
          an AJAX request to the server and outputs the result on the page.`
      }, {
        src: '/images/all-movies/all-movies-4.png',
        descr: `Finally, application has mechanisms to suggest some content based
          on user's previous activity. The data collected then analised by the application
          and it sends several requests to the server based on analysis output.`
      }
    ],
    title: 'All best movies in one app',
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
      {
        src: '/images/dashboard/dashboard-1.png',
        descr: `Simple application built on React that utilizes several APIs to
          processes posts-like data and impliments basic registration and
          authentification functionality.`
      }, {
        src: '/images/dashboard/dashboard-2.png',
        descr: `The data of newly registered user gets send to server via API
          call as well as passed to the state of client-side interface.`
      }, {
        src: '/images/dashboard/dashboard-3.png',
        descr: `Signed in user has possibility to edit or delete his previous
          posts, as well as to add new ones.`
      }, {
        src: '/images/dashboard/dashboard-4.png',
        descr: `Possibility to upload pictures from user's computer is simulated
          using local storage of the browser.`
      }, {
        src: '/images/dashboard/dashboard-5.png',
        descr: `Finally, the database is exposed through API for usage to other
        application, as well as client-side part of this application.`
      }
    ],
    title: 'Simple posts application on React',
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
      {
        src: '/images/lemon-chat/lemon-chat-1.png',
        descr: `Application is designed to represent the functionality of chat
          and handles all types of necessary interaction types between users.`
      }, {
        src: '/images/lemon-chat/lemon-chat-2.png',
        descr: `The classical for social networks "friends" system was implemented.
          It allowed to organize and systemize the process of initiating new chats
          between users, as well as management of existing ones.`
      }, {
        src: '/images/lemon-chat/lemon-chat-3.png',
        descr: `Chats themselves follow standard practices and besides communication
          functionality provide user with some additional data.`
      }, {
        src: '/images/lemon-chat/lemon-chat-4.png',
        descr: `In order to keep chats organized with participants, the hirerachial
          structure of administrators priviledges was implimented.`
      }, {
        src: '/images/lemon-chat/lemon-chat-5.png',
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
    url: `https://neigh-map.herokuapp.com/`,
    github: `https://github.com/A-Yerkeshev/map`,
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
  }];

  var inactiveProjects = [
  {
    name: 'Items Catalog',
    url: null,
    github: `https://github.com/A-Yerkeshev/catalog`,
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
  },  {
    name: 'Real Estate Demo App',
    github: `https://github.com/A-Yerkeshev/RealEstateDemoApp`,
    images: [
      {
        src: '/images/real-estate/real-estate-1.png',
        descr: `Real estate demo application is an experiment project of
          combining together two front-end technologies like AngularJS and
          Three.js.`
      }, {
        src: '/images/real-estate/real-estate-2.png',
        descr: `Various 3D models are loaded into the app through native Three.js
          objects loaders such as OBJLoader and MTLLoader. Three.js has an object
          loading suppprt for all popular 3D models formats.`
      }, {
        src: '/images/real-estate/real-estate-3.png',
        descr: `AngularJS functionality can easilly be combined with Three.js
          since they do not interfere with each other - one creates three
          dimensional space on the webpage and second one handles two dimensional
          templates.`
      }, {
        src: '/images/real-estate/real-estate-4.png',
        descr: `While AngularJS handles dynamic templating, Three.js does not have
          such native functionality, so dynamic work with 3D objects needs to be
          coded manually.`
      }
    ],
    title: 'Experiment of combining Three.js and AngularJS',
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
      {
        src: '/images/movie-trailers/movie-trailers-1.png',
        descr: `Simple application that utilizes Python object-oriented programming.`
      }, {
        src: '/images/movie-trailers/movie-trailers-2.png',
        descr: `When poster is clicked it openes a video player and runs the trailer
          of that movie.`
      }
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
  }, {
    name: 'Protfolio v-1',
    url: null,
    github: `https://github.com/A-Yerkeshev/portfolio-v1`,
    images: [
      {
        src: '/images/portfolio/portfolio-1.png',
        descr: `This is how this website looked initially.`
      }, {
        src: '/images/portfolio/portfolio-2.png',
        descr: `The window on the left changed content dinamically when projects
          were selected, even that no JavaScript was used.`
      }
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
    github: `https://github.com/A-Yerkeshev/portfolio-v2`,
    images: [
      {
        src: '/images/portfolio-v2/portfolio-v2-1.png',
        descr: `This is how second version of this site looked like. The projects
          were listed in the bottom part of the screen.`
      }, {
        src: '/images/portfolio-v2/portfolio-v2-2.png',
        descr: `When project was clicked the demo video of it was played on the
          right hand side and description of the project replaced initial text.`
      }, {
        src: '/images/portfolio-v2/portfolio-v2-3.png',
        descr: `Website had an option to interact with the project website right
          on the portfolio website, without need of leaving it.`
      }
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
