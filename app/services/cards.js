function Cards ($routeParams, Requests, Topics) {
	var service = {};
	var _url = '../wp-json/posts?type=card&filter[topics]=';
	service.selectedCard;
	service.cache;
	service.topicRequested;

	// Reassign topicRequested
	service.setTopicRequested = function () {
		return service.topicRequested = $routeParams.topic;
	}
	
	service.getCards = function () {
		return Requests.getData(_url + service.setTopicRequested()).then(function(resp){
			service.cache = resp.data;

			resp.data[0].terms.topics.filter(function (topic) {
					if (topic.slug === service.topicRequested) {
						service.topicCache = topic;
					}
				});
			return resp;
		});
	};
	
	return service;
}

contextCards.factory('Cards', Cards);