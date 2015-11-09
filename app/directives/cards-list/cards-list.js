function cardsList (CardSelect) {
	return {
		restrict: 'A',
		controller: 'CardsController',
		templateUrl: 'app/directives/cards-list/cards-list.html',
		link: function ($scope, $element, attr, CardsController) {
			// Add card__* classes to cards for positioning
			if($scope.card.slug === CardSelect.getSelectedCard()) {
				$scope.card.isSelected = true;
				$scope.card.position = 'card__selected';
				CardSelect.cardRight = true;
			} else {
				$scope.card.isSelected = false;
				if (CardSelect.cardRight) {
					$scope.card.position = 'card__right';
				} else {
					$scope.card.position = 'card__left';
				}
			}

			if($scope.$last) {
				CardSelect.cardRight = false;
			}

		}
	}
}

contextCards.directive('cardsList', cardsList);