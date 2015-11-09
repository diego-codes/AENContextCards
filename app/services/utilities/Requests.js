function Requests ($http) {

	this.getData = function (url) {
		return $http.get(url).then(function (resp, status) {
			cache = resp;
			return resp;
		}).catch(function (err) {
			return err;
		});
	}
}


contextCards.service('Requests', Requests);