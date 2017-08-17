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

app.controller('appController', ['$scope', function ($scope) {

	$scope.removeDog = (dog) => {
		let removedDog = $scope.dogs.indexOf(dog);
		$scope.dogs.splice(removedDog, 1);
	};

	$scope.addDog = () => {
		$scope.dogs.push({
			name: $scope.newDog.name,
			breed: $scope.newDog.breed,
			hunger: true
		});
		$scope.newDog.name = '';
		$scope.newDog.breed = '';
	};

	$scope.dogs = [
		{
			name: 'Conney',
			breed: 'border collie',
			color: 'black',
			hunger: true,
			pic: 'assets/dog.png'
		},
		{
			name: 'Disco',
			breed: 'collie',
			color: 'black',
			hunger: true,
			pic: 'assets/dog.png'
		},
		{
			name: 'Lujza',
			breed: 'mix breed',
			color: 'black',
			hunger: false,
			pic: 'assets/dog.png'
		},
		{
			name: 'Berta',
			breed: 'fox terrier',
			color: 'white',
			hunger: true,
			pic: 'assets/dog.png'
		},
		{
			name: 'Bomper',
			breed: 'mix breed',
			color: 'brown',
			hunger: true,
			pic: 'assets/dog.png'
		}
	];
}]);
