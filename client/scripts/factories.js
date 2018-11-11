var app = angular.module('AshleySite.factories', [])

app.factory('Purchase', ['$resource', function($resource) {
       return $resource('http://localhost:3000/api/checkout/:id', {id: '@id'},
       {
           'update': {method: 'PUT'}
       });
}]);

//WILL THE TRANSACTION ID NEED TO BE UPDATED/SENT/PUT WHATEV SEPARATELY???? 


app.factory('Art', ['$resource', function($resource) {
       return $resource('http://localhost:3000/api/art/:id');
       
}]);


app.factory('Single', ['$resource', function($resource) {
       return $resource('http://localhost:3000/api/art/:id');
       
}]);



