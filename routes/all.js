var express = require("express"),
		router = express.Router(),
		path = require("path"),
		route_files = ['index', "lists", "labels", "notifications"];

for (var i = 0; i < route_files.length; i++) {
	require(path.resolve(path.dirname(__dirname), "routes/" + route_files[i]))(router);
}

module.exports = router;
