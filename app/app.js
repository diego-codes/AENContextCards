var contextCards = angular.module('contextCards', ['ngRoute','ngSanitize','ngAnimate', '720kb.socialshare']);

contextCards.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/topics.html',
		controller: 'TopicsController',
		controllerAs: 'top'
	}).when('/:topic/:card?', {
		templateUrl: 'views/cards.html',
		controller: 'CardsController',
		controllerAs: 'car',
		reloadOnSearch: false
	}).otherwise({ redirectTo: '/'});

	
});