function TopicsController (Topics, Cards, AppDescription) {

    // Check if topics data is cached
    if (Topics.cache) {
        this.topics = Topics.cache;
        this.loaded = true;
    } else {
        // Request topics
        Topics.getTopics()
        .then(function (resp) {
    		this.topics = Topics.cache;
            this.err = Topics.err;
            this.loaded = true;
        }.bind(this));
    }

    // Check if app description data is cached
    if (AppDescription.cache) {
        this.app = AppDescription.cache;
    } else {
        AppDescription.getAppDescription().then(function (resp) {
            this.app = AppDescription.cache;
        }.bind(this));
    }
}

contextCards.controller('TopicsController', TopicsController);