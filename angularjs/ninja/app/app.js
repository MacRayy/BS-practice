const app = angular.module('app', []);

app.controller('appController', function($scope) {
	$scope.message = 'hey';

	$scope.dogs = ['berta', 'conney', 'disco', 'lujza'];
});
