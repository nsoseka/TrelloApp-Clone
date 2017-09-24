var path = require('path'),
		Notifications = require(path.resolve(path.dirname(__dirname), "modules/notifications"));

module.exports = function(router) {
	router.get('/load/notifications', function(req, res, next) {
		var notifications = Notifications.get();
	  res.json({"notifications": notifications})
	})
};

