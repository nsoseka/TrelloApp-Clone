var DateView = Backbone.View.extend({
	template: App.templates.date,
	events: {
		"click .remove": "removeDueDate",
		"click .left.green": 'setDueDate',
		"click .close": "close"
	},
	close: function() {
		App.$el.find(".detailcard_view:visible").find('.date_picker').find('*').remove();
	},
	setDueDate: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var data = {},
				form = $(e.currentTarget).closest('form'),
				info = form.serializeArray();
		data.id = form.closest('.card').data('card');
		info.forEach(function(inf) {
			data[inf.name] = inf.value;
		});

		this.syncChange(data);
		this.close();
	},
	syncChange: function(data) {
		$.ajax({
			url: "/cards/edit_duedate",
			method: 'put',
			data: data,
			success: function(json) {
				App.cardEditor(json.card);
				var date = App.cards.get(+data.id).toJSON().due_date;
				App.$el.find('.card_view:visible .date .underline').html(date);
			}
		})
	},
	removeDueDate: function(e) {
		e.preventDefault();
		var data = {};
		data.id = $(e.currentTarget).closest('.card').data('card');
		data.date = '';
		data.time = '';
		this.close();
		this.syncChange(data);
	},
	render: function() {
		var target = App.$el.find(".detailcard_view:visible").find('.date_picker');
		target.find('*').remove();
		this.$el.html(this.template());
		target.html(this.$el).show();
	},
	initialize: function() {
		this.render();
	}
});

