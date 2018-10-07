var app = angular.module('lawncaresite.factories', [])




app.factory('Message', ['$resource', function ($resource) {
	return $resource('http://localhost:3000/api/contact');
}]);