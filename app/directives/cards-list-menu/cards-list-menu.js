function cardsListMenu () {
	return {
		restrict: 'A',
		templateUrl: 'app/directives/cards-list-menu/cards-list-menu.html',
		link: function (scope, element, attr) {
			element.on('click', function () {
				element.find('span').toggleClass('cards-list__icon--active');

				angular.element(document.querySelectorAll('.cards-list')).toggleClass('cards-list--active');
			});
		}
	}
}

contextCards.directive('cardsListMenu', cardsListMenu);
