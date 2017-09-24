var path = require('path'),
		fs = require('fs'),
		_ = require('underscore'),
		file_path = path.resolve(path.dirname(__dirname), 'data/cards.json'),
		file_path_notifications = path.resolve(path.dirname(__dirname), 'data/notifications.json'),
		App = require(path.resolve(path.dirname(__dirname), "modules/application"));


module.exports = {
	__readFile: function() {
		return App.__readFile(file_path);
	},
	get: function() {
		return App.get(file_path);
	},
	set: function(data) {
		App.set(data, file_path);
	},
	getMatchingCards: function(query) {
		return App.getMatchingCards(query, file_path);
	},
	getNotifications: function() {
		return App.__readFile(file_path_notifications).notifications;
	},
	setNotifications: function(new_not) {
		var data = {};
		var nots = this.getNotifications();
		nots.push(new_not);
		data.notifications = nots;
		fs.writeFileSync(file_path_notifications, JSON.stringify(data), "utf8");
	},
	formatMoveOrder: function(order) {
		for(var crd in order) {
			var card = {};

			console.log(crd[0], crd[2], order[crd]);
		}
	},
	getLastID: function() {
		return App.getLastID(file_path);
	},
	time: function() {
		var date = new Date();
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		
		return ("" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + 
		" at " + date.getHours() + ":" + date.getMinutes());
	},
	formLabel: function(card) {
		var label = {};
		label.label_id = +card.label_id;
		label.label_name = card.label_name;
		label.label_color = card.label_color;
		return label;
	},
	editLabels: function(card) {
		var checker;
		var data = {}; data.last_ID = this.getLastID();
		var cards = this.get(),
				edited_card = _.findWhere(cards, {"id": +card.id}),
				labels = edited_card.labels;
		var old_length = labels.length;
		labels = _.reject(labels, function(label) {
			if (label.label_id === +card.label_id) { checker = true };
			return label.label_id === +card.label_id;
		});

		cards = _.reject(cards, function(crd) {
			return crd.id === +card.id;
		});

		if (!checker) { labels.push(this.formLabel(card)); }
		edited_card.labels = labels;
		cards.push(edited_card);
		data.cards = cards;
		console.log(edited_card);
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		var not = "Labels on the card *" + edited_card.card_name + "* were changed! ";
		if (edited_card.subscribed) {
			this.setNotifications({
				card_id: edited_card.id,
				notification: not,
			});
		}
		return edited_card;
	},
	editSubscription: function(card) {
		var cards = this.get(),
				data = {},
				edit_card;

		data.last_ID = this.getLastID();
		edit_card = _.findWhere(cards, {"id": +card.id});
		cards = _.reject(cards, function(crd) {
			return crd.id === +card.id;
		});

		edit_card.subscribed = card.subscribed === "true";
		cards.push(edit_card);
		data.cards = cards;
		var not;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		if (edit_card.subscribed) {
			not = "You subscribed to the card *" + edit_card.card_name + "* Now you can see its changes";		
		} else {
			not = "You unsubscribed from the card *" + edit_card.card_name + "* You can no longer see its changes";		
		}

		this.setNotifications({
			card_id: edit_card.id,
			notification: not,
		});
		return edit_card;
	},
	editDuedate: function(card) {
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var data = {};
		var cards = this.get(),
				month, day, year, edited_card;

		data.last_ID = this.getLastID();
		edited_card = _.findWhere(cards, {"id": +card.id});
		if (card.date.trim()) {
			console.log(card.date, "hmm")
			month = +card.date.split("/")[0] - 1;
			day = card.date.split("/")[1];
			year = card.date.split("/")[2];
			edited_card.due_date = day + " " + months[month] + " " + year;
			if (card.time.trim()) {
				edited_card.due_date = edited_card.due_date + " at " + card.time;
			}
		} else {
			edited_card.due_date = "";
		}
		
		cards = _.reject(cards, function(crd) {
			return crd.id === +card.id;
		});
		
		cards.push(edited_card);
		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		var not = "The due date of card *" + edited_card.card_name + "* was changed to " + edited_card.due_date;
		if (edited_card.subscribed) {
			this.setNotifications({
				card_id: edited_card.id,
				notification: not,
			});
		}
		return edited_card;
	},
	deleteCard: function(card) {
		var data = {};
		var cards = this.get();
		var deleted_card = _.findWhere(cards, {"id": +card.id});
		cards = _.reject(cards, function(crd) {
			return crd.id === +card.id;
		});

		data.last_ID = this.getLastID();
		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		var not = "You deleted the card *" + deleted_card.card_name + "*!!!";
		if (deleted_card.subscribed) {
			this.setNotifications({
				card_id: deleted_card.id,
				notification: not,
			});
		}
		return deleted_card;
	},
	adjustPositions: function(cards, card) {
		cards = _.map(cards, function(crd) {
			if (crd.position >= +card.position) {
				crd.position += 1;
			}
			return crd;
		});

		return cards;
	},
	copyCard: function(card) {
		//{id: "17", title: "Good one", cards_labels: "on", cards_comments: "on", list_id: "2", …}
		var cards = this.get();
		var data = {};
		var old_copy = _.findWhere(cards, {'id': +card.id});
		var last_id = this.getLastID() + 1;
		data.last_ID = last_id;
		card.list_id = +card.list_id;
		card.id = last_id;
		card.card_name = card.title;
		card.description = old_copy.description;
		card.due_date = old_copy.due_date;
		card.position = +card.position;
		card.subscribed = old_copy.subscribed;

		if (card.comments) { 
			card.comments =  old_copy.comments
		} else {
			card.comments = [];
		};
		if (card.labels) { 
			card.labels = old_copy.labels 
		} else {
			card.labels = []
		};

		cards = this.adjustPositions(cards, card);
		cards.push(card);
		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		var not = "The card *" + card.card_name + "* was copied";
		if (card.subscribed) {
			this.setNotifications({
				card_id: card.id,
				notification: not,
			});
		}
		return card;
	},
	moveCard: function(card) {
		var cards = this.get(),
				data = {};
		data.last_ID = this.getLastID();
		var card_moved = _.findWhere(cards, {"id": +card.id});
		card_moved.position = card.position;
		card_moved.list_id = +card.list_id;
		cards = _.reject(cards, function(cd) {
			return cd.id === +card.id;
		});

		cards = this.adjustPositions(cards, card);
		cards.push(card_moved);
		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		return card_moved;
		console.log(card_moved);
	},
	postComment: function(card) {
		//{"comment": "This is just stupid men", "post_date": "12 sep 2017 at 13:11"}
		var data = {},
				cards = this.get(),
				new_comment = {},
				new_card;

		data.last_ID = this.getLastID();
		new_comment.comment = card.comment,
		new_comment.post_date = this.time();
		cards = _.map(cards, function(cd) {
			if (cd.id === +card.id) {
				console.log(cd.comments);
				cd.comments.push(new_comment);
				console.log(cd.comments);
				new_card = cd;
			}
			return cd;
		});

		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		var not = "A comment was added to the card *" + new_card.card_name + "*";
		if (new_card.subscribed) {
			this.setNotifications({
				card_id: new_card.id,
				notification: not,
			});
		}
		return new_card;
	},
	editDescription: function(card) {
		var data = {};
		data.last_ID = this.getLastID();
		var cards = this.get();
		var edited_card = _.findWhere(cards, {"id": +card.id});
		cards = _.reject(cards, function(cd) {
			return cd.id === +card.id;
		});
		edited_card.description = card.description;
		cards.push(edited_card);
		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		var not = "The description of the card *" + edited_card.card_name + "* was changed";
		if (edited_card.subscribed) {
			this.setNotifications({
				card_id: edited_card.id,
				notification: not,
			});
		}
		return edited_card;
	},
	createCard: function(card) {
		var data = {};
		card.list_id = +card.list_id;
		card.id = this.getLastID() + 1;
		card.position = card.id;
		card.labels = [];
		card.subscribed = false;
		card.due_date = '';
		card.comments = [];
		card.description = '';
		data.last_ID = card.id;
		var cards = this.get();
		cards.push(card);
		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		return card;
	},
	editCardName: function(card) {
		var data = {};
		data.last_ID = this.getLastID();
		var cards = this.get();
		var edit_card = _.findWhere(cards, {'id': +card.id});
		edit_card.card_name = card.card_name;

		cards = _.reject(cards, function(crd) {
			return crd.id === +card.id;
		})

		cards.push(edit_card);
		data.cards = cards;
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
		var nots = "You changed the title of the card *" + edit_card.card_name + "*";

		if (edit_card.subscribed) {
			this.setNotifications({'card_id': edit_card.id,
				"notification": nots,
			});
		}

		return edit_card;
	},
	moveCards: function(order) {
		var data = {};
		data.last_ID = this.getLastID()
		var cards = this.get(file_path);
		var changed_cards = [];
		for(var crd in order) {
			var values = crd.split('[');
			var id = +values[1].replace(/\]/, '');
			var l_id = +values[0];
			var card = _.findWhere(cards, {"id": id});
			card.list_id = l_id;
			card.position = +order[crd];
			changed_cards.push(card);
		}
		
		var unchanged = _.filter(cards, function(card) {
			return !(_.findWhere(changed_cards, {'id': +card.id}))
		});

		data.cards = changed_cards.concat(unchanged);
		fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
	},
};


