/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-school-project1',
    environment: environment,
    firebase: {
      apiKey: "AIzaSyCx08ouBMeF3a57BD11JqIF9dLOh0U9L_U",
      authDomain: "menu-tracker-f1064.firebaseapp.com",
      databaseURL: "https://menu-tracker-f1064.firebaseio.com",
      projectId: "menu-tracker-f1064",
      storageBucket: "menu-tracker-f1064.appspot.com",
      messagingSenderId: "128302521535"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
