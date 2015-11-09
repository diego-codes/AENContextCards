function CardsController ($location, Cards, CardSelect) {
	// Load cards
    this.loadCards = function () {
    	Cards.getCards().then(function (resp) {
			this.cards = Cards.cache;
			this.topic = Cards.topicCache;
			this.err = Cards.err;
	    	this.loaded = true;

	    }.bind(this));
    };

    // Check if topic cache exists
    if (Cards.topicCache) {
    	Cards.setTopicRequested();
    	// Check if requested topic matches cached topic 
    	if (Cards.topicCache.slug === Cards.topicRequested) {
    		this.cards = Cards.cache;
			this.topic = Cards.topicCache;
			this.loaded = true;
		} else {
			this.loadCards();
		}
	} else {
		this.loadCards();
	}
	
	this.selectedCard = CardSelect.getSelectedCard();

	this.setNextCard = function (cardIndex) {
		if((cardIndex + 1) < this.cards.length) {
			this.nextCard = this.cards[cardIndex + 1].slug;
			return this.nextCard;
		} else {
			return '';
		}
	}

	this.setPrevCard = function (cardIndex) {
		if ((cardIndex - 1) >= 0) {
			this.prevCard = this.cards[cardIndex - 1].slug;
			return this.prevCard;
		} else {
			return '';
		}
	}
	
	this.url = $location.absUrl();
}

contextCards.controller('CardsController', CardsController);