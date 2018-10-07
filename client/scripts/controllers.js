var app = angular.module("lawncaresite.controller", [])


app.controller('contactController', ['$scope', '$location', 'Message', function ($scope, $location, Message) {
	//SEND EMAIL - WORKING & SENDING TO 
	$scope.sendEmail = function () {
		var newMessage = new Message({
			email: $scope.from,
			subject: "a new friend",
			message: $scope.content
		});

		newMessage.$save(function () {
			// alert("Message sent!");
			$location.path('/');

		});

	};
	angular.element(document).ready(function () {
		$('#myFooter').show();
		$('.stars').show();
		$('.twinkling').show();
		$('body').removeClass().addClass("contact-page");
	});
}]);

