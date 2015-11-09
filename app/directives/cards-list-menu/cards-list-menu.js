function cardsListMenu () {
	return {
		restrict: 'A',
		templateUrl: 'app/directives/cards-list-menu/cards-list-menu.html',
		link: function (scope, element, attr) {
			element.on('click', function () {
				element.find('span').toggleClass('cards-list--menu--icon__active');

				angular.element(document.querySelectorAll('.cards-list')).toggleClass('cards-list__active');
			});
		}
	}
}

contextCards.directive('cardsListMenu', cardsListMenu);