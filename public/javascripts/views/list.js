var ListView = Backbone.View.extend({
	attributes: {
		'class': 'list_view'
	},
	template: App.templates.lists,
	events: {
		"click .new_card .nc": "newCard",
		"click .list_header .left": "editListName",
		"click .card_shower .fa-pencil": "editCardName",
		"blur .list_header textarea": "hideTextarea",
		"click .card a.card_shower": "showCard",
		"click .overlay, .edit_card_name .green": "closeEditCard",
		"click .detailcard_view": "hideView",
		"click .new_card .close": "closeNewCardForm",
		"submit .new_card form": "createNewCard",
	},
	hideView: function(e) {
		if ($(e.target).hasClass('detailcard_view') || $(e.target).hasClass('cardy')) {
			$(e.currentTarget).hide();
			router.navigate("/lists", {trigger: true});
		}
	},
	createNewCard: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var data = {};
		var target = $(e.currentTarget);

		data.list_id = target.closest('.list').data('id');
		data.card_name = target.find('textarea').get(0).value;

		$.ajax({
			url: "cards/add_card",
			method: 'post',
			data: data,
			success: function(json) {
				App.addCard(json.card);
			}
		});
	},
	closeNewCardForm: function(e) {
		e.preventDefault();
		$(e.currentTarget).closest('form').hide().siblings('a').show();
	},
	closeEditCard: function(e) {
		var target = $(e.currentTarget),
				h3 = target.closest('h3'),
				span = h3.find('span').get(0),
				data = {},
				card, new_name, id, old_name;
		e.preventDefault();
		e.stopPropagation();
		h3.find('.overlay').hide();
		h3.removeClass('show').find('.edit_card_name').hide();
		card = $(e.currentTarget).closest('.card');
		new_name = card.find('textarea').get(0).value.trim();
		old_name = span.textContent.trim();
		id = card.data('card');
		if (target.hasClass('overlay') || old_name === new_name) { return; }
		span.textContent = new_name;
		data['card_name'] = new_name;
		data['id'] = id;

		$.ajax({
			url: "cards/edit_cardname",
			method: 'put',
			data: data,
			success: function(json) {
				App.editCardName(json.card);
			}
		});
	},
	newCard: function(e) {
		e.preventDefault();
		$(e.currentTarget).hide().siblings("form").show().find('textarea').get(0).focus();
	},
	hideTextarea: function(e) {
		var data = {};
		var textarea = $(e.currentTarget);
		var new_name = textarea.get(0).value.trim();
		var h2 = textarea.siblings('.left');
		var old_name = h2.get(0).textContent.trim();
		textarea.hide().siblings(".left").show();
		if (new_name === old_name) { return; }
		h2.get(0).textContent = new_name;
		data['list_name'] = new_name;
		var list_id = $(h2).closest('.list').data('id');
		data['id'] = list_id;
		$.ajax({
			url: "lists/edit_listname",
			method: "put",
			data: data,
			success: function(json) {
				App.editListName(json.list);
			}
		});
	},
	showCard: function(e) {
		var card = +$(e.currentTarget).attr("href");
		var url = "/cards/" + card;
		e.preventDefault();
		App.showCard(card);
		router.navigate(url, {trigger: true});
	},
	editCardName: function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(e.currentTarget).closest('a').siblings('h3')
		.find('.overlay').show();
		$(e.currentTarget).closest('a').siblings('h3')
		.addClass('show').find('.edit_card_name').show()
		.find("textarea").get(0).focus();

		function move_up() {
			var post = $('.show').closest('.card').position().top;
			if (post > 440) {
				$('.show').closest('.card').css({
					minHeight: 100
				});
				$('.show').closest('.list_container').scrollTop(200);
			}
		}
		 
		move_up();
	},
	editListName: function(e) {
		$(e.currentTarget).hide().siblings("textarea").show().get(0).focus();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		App.$el.find(".main_content").append(this.$el);
	},
	initialize: function() {
		this.render();
	}
});

