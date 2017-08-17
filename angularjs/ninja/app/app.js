'use strict'

const app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'view/home.html'
		})
		.when('/directory', {
			templateUrl: 'view/directory.html',
			controller: 'appController'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);

app.controller('appController', ['$scope', '$http', function ($scope, $http) {

	$scope.removeDog = (dog) => {
		let removedDog = $scope.dogs.indexOf(dog);
		$scope.dogs.splice(removedDog, 1);
	};

	$scope.addDog = () => {
		$scope.dogs.push({
			name: $scope.newDog.name,
			breed: $scope.newDog.breed,
			hunger: true,
			pic: "assets/dog.png"

		});
		$scope.newDog.name = '';
		$scope.newDog.breed = '';
	};

	$http.get('data/dogs.json').then((response) => {
			$scope.dogs = response.data;
	});
}]);
