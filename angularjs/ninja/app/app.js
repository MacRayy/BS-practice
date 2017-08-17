'use strict'

const app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'view/home.html',
			controller: 'appController'
		})
		.when('/contact', {
			templateUrl: 'view/contact.html',
			controller: 'ContactController'
		})
		.when('/contact-success', {
			templateUrl: 'view/contact-success.html',
			controller: 'ContactController'
		})
		.when('/directory', {
			templateUrl: 'view/directory.html',
			controller: 'appController'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);

app.directive('randomDog', [function (){
	return {
		restrict: 'E',
		scope: {
			dogs: '=',
			title: '='
		},
		templateUrl: 'view/random.html',
		transclude: true,
		replace: true,
		controller: function ($scope) {
			$scope.random = Math.floor(Math.random() * 4)
		}
	};
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

	$scope.removeAll = () => {
		$scope.dogs = [];
	};

	// $http.get('data/dogs.json').then((response) => {
	// 		$scope.dogs = response.data;
	// });

	$http ({
		method: 'GET',
  	url: '/data'
		}).then((response) => {
			$scope.dogs = response.data;
		});
}]);

app.controller('ContactController', ['$scope', '$location', function ($scope, $location) {
	$scope.sendMessage = () => $location.path('/contact-success');
}]);
