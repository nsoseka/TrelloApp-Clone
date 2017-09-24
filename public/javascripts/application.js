var App = {
	templates: JST,
	$el: $("main"),
	init: function() {
		this.renderHome();
		this.bindEvents();
	},
	bindDatePicker: function() {
		setUpDate();
	},
	renderHome: function() {
		this.showHead();
		new HomeView();
	},
	showNotificationsView: function() {
		var notifications = this.notifications;
		new NotificationsView ({
			collection: notifications
		});
	},
	showNotifications: function() {
		var self = this;
		if (this.notifications === undefined) {
			this.notifications = new Notifications();
			this.notifications.fetch({
				success: function(data) {
					self.showNotificationsView();
				}
			});
		} else {
			this.notifications.fetch({
				success: function(data) {
					self.showNotificationsView();
				}
			});
		}
	},
	showHead: function() {
		new HeaderView();
	},
	showCardMover: function() {
		new CardMoverView();
	},
	showDatePicker: function() {
		new DateView();
		this.bindDatePicker();
	},
	showCopyCard: function(id) {
		var model = this.cards.get(id);
		new CopyCardView({
			model: model
		});
	},
	showBoard: function() {
		this.showHead();
		App.$el.find('.main_content ul').remove();
		App.$el.addClass('board');
		$('body').addClass('board');
		App.$el.find('.main_content').removeClass("boards").addClass('lists');
		var self = this;
		if (this.lists) { this.renderLists() ; } 
		else {
			this.lists = new Lists();
			this.lists.comparator = 'position';
			this.lists.fetch({
				success: function(data) {
					self.renderLists.call(self);
					self.setCards();				
				}
			});
		}		
	},
	showLabelChooser: function() {
		var labels = this.labels;
		new LabelsView({
			collection: labels,
		});
	},
	setLabels: function() {
		var self = this;
		this.labels = new Labels();
		this.labels.fetch({
			success: function() {
				
			}
		});
	},
	chooseLabel: function() {
		var self = this;
		if (this.labels === undefined) {
			this.labels = new Labels();
			this.labels.fetch({
				success: function(data) {
					self.showLabelChooser.call(self);
				}
			})
		} else {
			self.showLabelChooser();
		}
		//this.labels;
	},
	createLabel: function(label_id) {
		if (!label_id) {
			new CreateLabelView();
		} else {
			var label = this.labels.get(+label_id);
			new CreateLabelView({
				model: label,
			});
		}
	},
	addLabel: function(label) {
		this.labels.add(label);
	},
	deleteCard: function(card) {
		this.cards.remove(+card.id);
		var cards = this.lists.get(+card.list_id).get('cards');
		cards = _.reject(cards, function(crd) {
			return crd.id === +card.id;
		});

		cards = this.sortCards(cards);
		this.lists.get(+card.list_id).set('cards', cards);
		this.lists.sort();
	},
	addCard: function(card) {
		this.cards.add(card);
		var cards = this.lists.get(card.list_id).get('cards');
		if (cards === undefined) { cards = []};
		cards.push(card);
		cards = cards.sort(function(a, b) {
			return a.position - b.position;
		});

		this.lists.get(card.list_id).set('cards', cards);
		this.lists.sort();
		this.renderLists();
		App.$el.find('.main_content').find('div.list[data-id="' + card.list_id + '"]').
		find('.nc').hide().siblings('form').show().find('textarea').get(0).focus();
	},
	setCards: function() {
		var set_of_cards = [];
		this.lists.models.forEach(function(model) {
			set_of_cards = set_of_cards.concat(model.toJSON().cards);
		});

		this.cards = new Cards(set_of_cards);
	},
	copyCard: function(card) {
		this.cards.add(card);
		var cards = this.lists.get(+card.list_id).get('cards');
		cards = this.adjustPositions(cards, card);
		cards.push(card);
		cards = this.sortCards(cards);
		this.lists.get(+card.list_id).set('cards', cards);
		this.lists.sort();
	},
	sortCards: function(cards) {
		cards = cards.sort(function(a, b) {
			return a.position - b.position;
		});

		return cards;
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
	repositionCard: function(cards, card) {
		cards = _.reject(cards, function(cd) {
			return cd.id === +card.id;
		});
		cards.push(card);

		return cards;
	},
	moveCard: function(card) {
		var old_card_list = +(_.findWhere(this.cards.toJSON(), {"id": +card.id}).list_id);
		var cards_added = this.lists.get(+card.list_id).get('cards');

		this.cards.add(card, {merge: true});
		cards_added = this.adjustPositions(cards_added, card);
		if (card.list_id === old_card_list) {
			cards_added = this.repositionCard(cards_added, card);
			this.lists.get(+card.list_id).set('cards', cards_added);
			this.lists.sort();
			return;
		}

		cards_added.push(card);
		cards_added = this.sortCards(cards_added);
		this.lists.get(+card.list_id).set('cards', cards_added);
		var cards_reduced = _.reject(this.lists.get(old_card_list).get('cards'), function(cd) {
			return cd.id === + card.id;
		});

		cards_reduced = this.adjustPositions(cards_reduced, card);
		cards_reduced = this.sortCards(cards_reduced);
		this.lists.get(old_card_list).set('cards', cards_reduced);
		this.lists.sort();
	},
	cardEditor: function(card) {
		this.cards.add(card, {merge: true});
		var cards = this.lists.get(+card.list_id).get('cards');
		cards = _.reject(cards, function(cd) {
			return +card.id === cd.id;
		});

		cards.push(card);
		cards = cards.sort(function(a, b) {
			return a.position - b.position;
		});

		this.lists.get(+card.list_id).set('cards', cards);
		this.lists.sort();
	},
	addComment: function(card) {
		this.cardEditor(card);
	},
	editCardDescription: function(card) {
		var edited_card = this.cards.add(card, {merge: true});
		var cards = this.lists.get(+card.list_id).get('cards');
		cards = _.reject(cards, function(cd) {
			return +card.id === cd.id;
		});

		cards.push(card);
		cards = cards.sort(function(a, b) {
			return a.position - b.position;
		});
		this.lists.get(+card.list_id).set('cards', cards);
		this.lists.sort();
	},
	editCardName: function(card) {
		var l_id = card.list_id;
		var cards = this.lists.get(l_id).get('cards');
		cards = _.reject(cards, function(crd) {
			return crd.id === card.id; 
		});

		cards.push(card);
		cards = cards.sort(function(a, b) {
			return a.position - b.position;
		});
		
		this.lists.get(l_id).set('cards', cards);
		this.lists.sort();
		this.cards.add(card, {merge: true});
	},
	renderLists: function() {
		App.$el.find(".page_indicator").html(this.templates.board_details);
		App.$el.find(".main_content").find('.list_view').remove();
		App.$el.find("#new_list").remove();
		_.each(this.lists.models, function(list) {
			new ListView({
				model: list,
			})
		});
		this.showListAdder();
		setUpDragDrop();
	},
	addList: function(list) {
		this.lists.add(list);
		this.renderLists();
	},
	showListAdder: function() {
		new ListAdder();
	},
	showCard: function(card) {
		this.showHead();
		App.$el.find('.main_content > ul').remove();
		App.$el.addClass('board');
		$('body').addClass('board');
		App.$el.find('.main_content').removeClass("boards").addClass('lists');
		var self = this;
		if (this.cards) {
			this.renderLists();
			this.displayCard(card);
			return;
		} else {
			this.lists = new Lists();
			this.lists.comparator = 'position';
			this.lists.fetch({
				success: function(data) {
					self.renderLists.call(self);
					self.setCards();
					self.displayCard(card);
				}
			});
		}	
	},
	displayCard: function(card) {
		if (card) {
			var cd = this.cards.get(+card);
			new CardView({
				model: cd,
			})
		}
	},
	showSearchResults: function(json) {
		var searches = new SearchResults(json);
		new SearchResultsView({
			collection: searches,
		});
	},
	editListName: function(list) {
		this.lists.add(list, {merge: true});
		this.lists.sort();
	},
	reOrderLists: function(new_order) {
		for(var prop in new_order) {
			this.lists.get(prop).set('position', +new_order[prop]);
		}
		this.lists.sort();

		$.ajax({
			url: 'lists/re_order',
			method: 'put',
			data: new_order,
			success: function(json) {
			},
		})
	},
	reOrderCards: function(new_order) {
		var new_set = [];
		for(var prop in new_order) {
			new_set = [];
			for(var c in new_order[prop]) {
				new_set.push(this.cards.get(c).set('position', +new_order[prop][c]).toJSON());
			}
			new_set = new_set.sort(function(a, b) {
				return a.position - b.position;
			});

			this.lists.get(prop).set('cards', new_set);
		}

		$.ajax({
			url: 'cards/re_order',
			method: 'put',
			data: new_order,
			success: function(json) {
			}
		});
	},
	bindEvents: function() {
		_.extend(this, Backbone.Events);
		this.on("show_board", this.showBoard.bind(this));
		this.on("add_list", this.addList.bind(this));
	},
};	


