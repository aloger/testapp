
var app = angular.module('myproject', ['ionic','ion-datetime-picker','ion-autocomplete','ngMessages']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('stepone', {
    url: '/stepone',
    templateUrl: 'templates/stepone.html',
  });
  $stateProvider.state('step2',{
    url: '/step2',
    templateUrl:'templates/step2.html',
  });
  $stateProvider.state('complete',{
    url: '/complete',
    templateUrl:'templates/complete.html',
  });
  $urlRouterProvider.otherwise('/stepone')
});

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});