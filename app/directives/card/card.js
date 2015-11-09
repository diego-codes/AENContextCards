function card () {
	return {
		restrict: 'A',
		templateUrl: 'app/directives/card/card.html'
	}
}

contextCards.directive('card', card);