var path = require('path'),
		fs = require('fs'),
		_ = require('underscore'),
		file_path = path.resolve(path.dirname(__dirname), 'data/notifications.json'),
		App = require(path.resolve(path.dirname(__dirname), "modules/application"));


module.exports = {
	__readFile: function() {
		return App.__readFile(file_path);
	},
	get: function() {
		return JSON.parse(fs.readFileSync(file_path, "utf8")).notifications;
	},
	set: function(data) {
		App.set(data, file_path);
	}
};
