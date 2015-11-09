function CardSelect ($routeParams) {
	var service = {};

	// Reassign selectedCard
	service.getSelectedCard = function () {
		if (service.selectedCard = $routeParams.card) {
			return service.selectedCard = $routeParams.card;
		}
	}

	service.getCardRight = function () {
		return service.cardRight;
	}

	return service;
}

contextCards.factory('CardSelect', CardSelect);