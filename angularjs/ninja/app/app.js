const app = angular.module('app', []);

app.controller('appController', ['$scope', function($scope) {
	$scope.message = 'hey';

	$scope.dogs = [
		{
			name: 'Conney',
			breed: 'border collie'
		},
		{
			name: 'Lujza',
			breed: 'mix breed'
		},
		{
			name: 'Berta',
			breed: 'fox terrier'
		}
	];
}]);
