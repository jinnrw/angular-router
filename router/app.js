var app = angular.module('myApp', ['ngRoute']);

app.component('page2', {
  templateUrl: 'partials/page2.comp.html',
  controller: function() {
    this.title = 'Page 2 Content'
  }
})



app.config(function($routeProvider){
  $routeProvider
  .when('/page2',{
    template: '<page2></page2>'
  })
  .when('/page3',{
    templateUrl: 'partials/page3.html'
  });

})