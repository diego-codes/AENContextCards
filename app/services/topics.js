function Topics (Requests) {
	var service = {};
	var _url = '../wp-json/taxonomies/topics/terms';
	service.cache;
	service.err;

	service.getTopics = function () {
		return Requests.getData(_url).then(function(resp) {
			service.cache = resp.data.reverse();
			return resp;
		});
	}

	return service;
}


contextCards.factory('Topics', Topics);