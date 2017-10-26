var app = angular.module('myApp', ['ngRoute']);

// Components
app.component('mainContent', {
  templateUrl: 'partials/mainContent.comp.html',
  controller: function() {
    this.title = 'Main page'
  }
})

app.component('page2', {
  templateUrl: 'partials/page2.comp.html',
  controller: function() {
    this.title = 'Page 2'
  }
})

app.component('page3', {
  templateUrl: 'partials/page3.comp.html',
  controller: function() {
    this.title = 'Page 3'
  }
})

app.component('comp1', {
  templateUrl: 'partials/comp1.html',
  controller: function() {
    this.title = 'Comp 1 Content'
  }
})

app.component('comp2', {
  templateUrl: 'partials/comp2.html',
  controller: function() {
    this.title = 'Comp 2 Content'
  }
})



app.config(function($routeProvider){
  $routeProvider
  .when ('/', {
    tempalte: '<mainContent></mainContent>'
  })
  .when('/page2',{
    template: '<page2></page2>'
  })
  .when('/page3',{
    template: '<page3></page3>'
  });
  // .otherwise( {
  //   template: '<main></main>'
  // })

})