// Ionic Starter App
angular.module('myApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/home/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-profile': {
        templateUrl: 'app/home/home.html'
      }
    }
  })

  .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'app/event/events.html'
        }
      }
    })

  .state('tab.invitations', {
      url: '/invitations',
      views: {
        'tab-invitations': {
          templateUrl: 'app/invitation/invitations.html'
        }
      }
    })
  .state('tab.invitationsStateOne', {
      url: '/invitationsStateOne/:id',
      views: {
        'tab-invitations': {
          templateUrl: 'app/invitation/invitedEventStageOne.html'
        }
      }
    })
  .state('tab.newEvent',{
    url: '/newEvent',
    views: {
      'tab-events':{
        templateUrl: 'app/event/new.html'  
      }
    }
  })
  .state('tab.event',{
    url: '/event/:id',
    views: {
      'tab-events':{
        templateUrl: 'app/event/event.html'  
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/register/login.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

angular.module("myApp").filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});