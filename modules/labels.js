var path = require('path'),
		fs = require('fs'),
		_ = require('underscore'),
		file_path = path.resolve(path.dirname(__dirname), 'data/labels.json'),
		App = require(path.resolve(path.dirname(__dirname), "modules/application"));

module.exports = {
	__readFile: function() {
		return App.__readFile(file_path);
	},
	get: function() {
		return this.__readFile().labels;
	},
	last_ID: function() {
		return this.__readFile().last_ID;
	},
	createLabel: function(label) {
		var data = {};
		var labels = this.get();
		label.id = this.last_ID() + 1;
		data.last_ID = label.id;
		labels.push(label);
		data.labels = labels;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		return label;
	},
	editLabel: function(label) {
		var data = {};
		data.last_ID = this.last_ID();
		var labels = this.get();
		var edited_label = _.findWhere(labels, {"id": +label.id});
		labels = _.reject(labels, function(lb) {
			return lb.id === +label.id;
		});

		edited_label.label_name = label.label_name;
		edited_label.label_color = label.label_color;
		labels.push(edited_label);
		data.labels = labels;
		//fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		return edited_label;
	},
};


