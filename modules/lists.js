var path = require('path'),
		fs = require('fs'),
		_ = require('underscore'),
		cards_file_path = path.resolve(path.dirname(__dirname), 'data/cards.json'),
		lists_file_path = path.resolve(path.dirname(__dirname), 'data/lists.json'),
		App = require(path.resolve(path.dirname(__dirname), "modules/application"));

module.exports = {
	__readFile: function() {
		App.__readFile(file_path);
	},
	get: function(file_path) {
		return this.__readFile(file_path).cards;
	},
	set: function(data) {
		App.set(data, file_path);
	},
	getMatchingCards: function(query) {
		return App.getMatchingCards(query);
	},
	sortCards: function(cards) {
		return cards.sort(function(a, b) {
			return a.position - b.position;
		});
	},
	getLastID: function(file_path) {
		return App.getLastID(file_path);
	},
	reOrderLists: function(new_order) {
		App.reOrderItems(lists_file_path, new_order, 'lists');
	},
	editListName: function(list) {
		var data = {};
		var lists = App.__readFile(lists_file_path).lists;
		var new_list = _.findWhere(lists, {"id": +list.id});
		lists = _.reject(lists, function(l) {
			return list.id === l.id;
		});

		new_list['list_name'] = list.list_name;
		lists.push(new_list);
		data.lists = lists;
		data.last_ID = this.getLastID(lists_file_path);
		fs.writeFileSync(lists_file_path, JSON.stringify(data), "utf8");
		return new_list;
	},
	createList: function(list) {
		var data = {};
		var lists = App.__readFile(lists_file_path).lists;
		var list_id = this.getLastID(lists_file_path) + 1;
		var new_list = {};
		new_list['list_name'] = list['list_name'];
		new_list['id'] = list_id;
		new_list['position'] = list_id;
		new_list['board'] = 'your_only_board';
		lists.push(new_list);
		data.last_ID = list_id;
		data['lists'] = lists;
		fs.writeFileSync(lists_file_path, JSON.stringify(data), "utf8");

		return new_list;
	},
	getCards: function() {
		var cards = App.__readFile(cards_file_path).cards;
		var lists = App.__readFile(lists_file_path).lists;
		var self = this;

		_.each(lists, function(list) {
			var list_id = list['id'];
			var list_cards = _.reject(cards, function(card) {
				return card['list_id'] !== list_id
			});

			list['cards'] = self.sortCards(list_cards);
		});

		return lists;
	}
};

