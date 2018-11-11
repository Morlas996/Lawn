var app = angular.module("AshleySite.controller", [])

app.controller('ArtController', ['$scope', '$location', 'Art', function($scope, $location, Art){
       
         $scope.Arts = Art.query();


}])
app.controller('ArtDetailController', ['$scope', '$location', '$routeParams', 'Art', function ($scope, $location, $routeParams, Art) {

    $scope.arts = Art.get({ id: $routeParams.id }, function (success) {
        $scope.art = success;
    });

}]);
app.controller('contactController', ['$scope', '$location', 'Login', function ($scope, $location, Login) {
	
	$scope.sendEmail = function () {
		var newMessage = new Menu({
			email: $scope.from,
			subject: "a new friend",
			message: $scope.content
		});

		newMessage.$save(function () {
		
			$location.path('/');

		});

	};
	

}]);


app.controller('loginController', ['$scope', '$location', 'UserService',
		
			
	function ($scope, $location, UserService) {
			

			

			$scope.login = function () {
				UserService.login($scope.email, $scope.password).then(function () {
					redirect();
				}, function (err) {
					console.log(err);
				})
			}
            function redirect() {
				var dest = $location.search().p;
				if (!dest) {
					dest = '/';
				}
				$location.path(dest).search('p', null);
			}
			$('body').removeClass();
		}
	])
	// CHECKOUT PG CONTROLLER
app.controller("CheckoutController", ['$scope', '$routeParams', '$http', 'Purchase', 'Product', function ($scope, $routeParams, $http, Purchase, Product) {
    
    $scope.purchases = Purchase.query();

    

    // $scope.purchases = Purchase.get({ id: $routeParams.id }, function (success) {
    //     $scope.purchase = success;
    // });
    
    $scope.processPayment = function () {
        Stripe.card.createToken({
            number: $scope.cardNumber,
            cvc: $scope.cvc,
            exp_month: $scope.expMonth,
            exp_year: $scope.expYear
        }, function (status, response) {
            if (response.error) {
                alert("There was a problem!");
            } else {
                var token = response.id;

                var amount = $scope.total;
                
                // STRIPE TRANSACTION ID = FIND IT HERE AND PUT/UPDATE THE PURCHASES TABLE WITH THIS FIELD????

                $http({
                    method: 'POST',
                    url: 'http://localhost:3000/api/checkout',
                    data: {
                        token: token,
                        amount: 600

//// THIS IS WHERE WE POST TO THE PURCHASES TABLE IMNCLUDING TOKEN

                        ///// amount will be the total of all the items in the shopping cart
                    }
                }).then(function(success) {
                // this is where we will send an email to the customer about their purchase!!!
                success.sendEmail
                    alert("payment successful");
                }, function() {
                    alert("payment UNSUCCESSFUL");
                })
            }
        })
    };
}]);

app.controller('homeController', ['$scope', '$location', 'Purchase', 'Product', function ($scope, $location, Purchase, Product) {

    $scope.purchases = Purchase.query();

    $scope.total = Purchase.query().length;

    $scope.viewCart = function () {
        $scope.purchases = Purchase.query();
        $scope.products[index].likes += 1;
    };

}]);