function AppDescription (Requests) {
	var service = {};
	var _url = '../wp-json/posts/types/card';
	service.cache;
	service.err;

	service.getAppDescription = function () {
		return Requests.getData(_url).then(function(resp) {
			service.cache = resp.data;
			return resp;
		});
	}

	return service;
}


contextCards.factory('AppDescription', AppDescription);