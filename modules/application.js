var fs = require('fs'),
		_ = require('underscore');

module.exports = {
	__readFile: function(file_path) {
		return JSON.parse(fs.readFileSync(file_path, "utf8"));
	},
	get: function(file_path) {
		return this.__readFile(file_path).cards;
	},
	set: function(data, file_path) {
		data.id = this.getLastID() + 1;
		fs.writeFileSync(file_path, JSON.stringify({
			last_id: data.id,
			data: data
		}), "utf8");
	},
	getMatchingCards: function(query, file_path) {
		var cards = this.get(file_path);
		var matching_cards = _.reject(cards, function(card) {
			return (card.card_name + card.description).toLowerCase().indexOf(query) === -1;
		});

		return matching_cards;
	},
	getLastID: function(file_path) {
		return this.__readFile(file_path).last_ID;
	},
	reOrderItems: function(file_path, new_order, items) {
		var data = {};
		data.last_ID= this.getLastID(file_path);
		var items_set = this.__readFile(file_path)[items];
		data[items] = _.map(items_set, function(item) {
			var id = String(item['id']);
			var new_position = new_order[id];
			item['position'] = +new_position;
			return item;
		});

		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
	},
};


