var CardView = Backbone.View.extend({
	template: App.templates.card,
	attributes: {
		"class": "cardy",
	},
	events: {
		"click h2.left": "showTitleEdit",
		"click .card_view:not('textarea.edit_title')": "editTitle",
		"click .edit_labels": "editLabels",
		"click .edit_date": "editDate",
		"click .description .edit_description": "showEditForm",
		"click .description .fa-times": "hideEditForm",
		"submit .description form": "editDescription",
		"submit .comment form": "createComment",
		"click .move_card": "moveCard",
		"click .copy_card": "copyCard",
		"click .sub": "editSubscription",
		"click .delete_card": "deleteCard",
		"click .close": 'close',
	},
	close: function(e) {
		App.$el.find(".detailcard_view:visible").find('.cardy').remove();
		router.navigate("/lists", {trigger: true});
	},
	deleteCard: function(e) {
		var data = {};
		data.id = $(e.currentTarget).closest('.card').data('card');

		$.ajax({
			url: "/cards/delete_card",
			method: 'delete',
			data: data,
			success: function(json) {
				App.deleteCard(json.card);	
				router.navigate("/lists", {trigger: true});			
			}
		});
	},
	editSubscription: function(e) {
		var data = {};
		data.id = $(e.currentTarget).closest('.card').data('card');
		var status = $(e.currentTarget).get(0).getAttribute('class');

		if (status.indexOf('unchecked') === -1) {
			data.subscribed = false;
			$(e.currentTarget).removeClass('checked').addClass('unchecked');
		} else {
			data.subscribed = true;
			$(e.currentTarget).removeClass('unchecked').addClass('checked');
		}

		$(e.currentTarget).closest('.card').find('.sub_status i').toggleClass('fa-eye');

		$.ajax({
			url: "/cards/edit_subscription",
			method: 'put',
			data: data,
			success: function(json) {
				App.cardEditor(json.card);				
			}
		});
	},
	copyCard: function(e) {
		e.stopPropagation();
		e.preventDefault();
		var card_id = $(e.currentTarget).closest('.card').data('card');
		App.showCopyCard(card_id);
	},
	moveCard: function(e) {
		var list_name = $(e.currentTarget).closest('.card_view').find('.underline').value;
		App.showCardMover();
	},
	hideEditForm: function(e) {
		e.preventDefault();
		$(e.currentTarget).closest('form').hide();
	},
	createComment: function(e) {
		e.preventDefault();
		var data = {},
				form = $(e.currentTarget),
				comment = form.find('textarea').get(0).value.trim();

		data.comment = comment;
		data.id = +form.closest('.card').data('card');
		if (!comment) { return; }
		$.ajax({
			url: "/cards/post_comment",
			method: 'post',
			data: data,
			success: function(json) {
				App.addComment(json.card);				
			}
		});
		this.showComment(data);
		form.find('textarea').get(0).value = '';
	},
	showComment: function(data) {
		App.$el.find(".detailcard_view:visible").find('.card_view .activity .comments_posted').
		prepend(App.templates.comment({comment: data.comment, post_date: "now"}));
	},
	editDescription: function(e) {
		e.preventDefault();
		var form = $(e.currentTarget);
		var old_description = form.siblings('p').get(0).textContent.trim();
		var data = {};
		data.id = +form.closest('.card').data('card');
		data.description = form.find('textarea').get(0).value.trim();
		form.hide();
		if (data.description === old_description ) { return; }
		form.siblings('p').get(0).textContent = data.description;
		$.ajax({
			url: "/cards/edit_description",
			method: 'put',
			data: data,
			success: function(json) {
				App.editCardDescription(json.card);				
			}
		});
	},
	showEditForm: function(e) {
		e.preventDefault();
		$(e.currentTarget).closest('h3').siblings('form').
		show().find('textarea').get(0).focus();
	},
	editLabels: function(e) {
		App.chooseLabel();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
	},
	editDate: function(e) {
		e.stopPropagation();
		App.showDatePicker();
	},
	showTitleEdit: function(e) {
		$(e.currentTarget).hide().siblings('textarea').show().get(0).focus();
	},
	editTitle: function(e) {
		//e.preventDefault();
		if ($(e.target).hasClass('left')) { return; }
		var data = {},
				textarea = $(e.currentTarget).closest('.card_view').find('.edit_title').hide(),
				text = textarea.get(0).value.trim(),
				h2 = textarea.siblings('h2.left').show(),
				h2text = h2.get(0).textContent.trim();

		if (h2text === text) {
			return;
		} else {
			data.card_name = text;
			data.id = +$(e.currentTarget).closest('.card').data('card');
			h2.get(0).textContent = text;
			$.ajax({
				url: "/cards/edit_cardname",
				method: 'put',
				data: data,
				success: function(json) {
					App.editCardName(json.card);
					h2.closest('.detailcard_view').siblings('h3').get(0).textContent = text;
				}
			});
		}
	},
	render: function() {
		var view = App.$el.find(".list div.card[data-card='" + this.model.get('id') + "']").
		find('.detailcard_view').show();

		view.find(".cardy").remove();
		this.$el.html(this.template(this.model.toJSON()));
		view.html(this.$el);
	},
	initialize: function() {
		this.render();
	}
});

