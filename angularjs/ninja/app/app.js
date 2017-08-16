'use strict'

const app = angular.module('app', []);

app.controller('appController', ['$scope', function($scope) {
	$scope.dogs = [
		{
			name: 'Conney',
			breed: 'border collie',
			hunger: true
		},
		{
			name: 'Disco',
			breed: 'collie',
			hunger: true
		},
		{
			name: 'Lujza',
			breed: 'mix breed',
			hunger: false
		},
		{
			name: 'Berta',
			breed: 'fox terrier',
			hunger: true
		}
	];
}]);
