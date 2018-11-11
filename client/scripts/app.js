var app  = angular.module('AshleySite', ['ngRoute', 'ngResource', 'AshleySite.services', 
'AshleySite.factories', 'AshleySite.controller', 'AshleySite.directives']);
//controls transition between views
app.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider ){
    $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl: "/views/home.html",
        

    })
    .when("/art", {
        templateUrl: "/views/art.html",
        controller: "ArtController"

    })
    .when("/contact", {
        templateUrl: "/views/contact.html",
        controller: "contactController"
        
    })
    .when("/checkout", {
        templateUrl: "/views/about.html",
        controller: "CheckoutController"
        
    })
    .when("/art/:id", {
        templateUrl: "/views/art/:id.html",
        controller: "ArtDetailController"
        
    })

    
    .when("/cart", {
        templateUrl: "/views/cart.html",
        controller: "CheckoutController"
    })
}])