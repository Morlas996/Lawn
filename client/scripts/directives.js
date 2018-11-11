var app = angular.module('AshleySite.directives', []);

app.controller('NavController', ['$scope', '$location', 'Purchase', function ($scope, $location, Purchase) {

    $scope.purchases = Purchase.query();

    $scope.total = Purchase.query().length;

    $scope.viewCart = function () {
        $scope.purchases = Purchase.query();
        $scope.products[index].likes += 1;
    };


}]);