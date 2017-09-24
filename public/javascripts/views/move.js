var CardMoverView = Backbone.View.extend({
	template: App.templates.move,
	events: {
		"click button.movebt": "move",
		"click .fa-times": "close",
	},
	close: function(e) {
		e.preventDefault();
		$(e.currentTarget).closest('.move').find('*').remove();
	},
	move: function(e) {
		e.preventDefault();
		var data = {};
		var info = $(e.currentTarget).closest('form').serializeArray();
		data.id = $(e.currentTarget).closest('.card').data('card');
		info.forEach(function(val) {
			data[val['name']] = val['value'];
		});

		$.ajax({
			url: "/cards/move_card",
			method: 'put',
			data: data,
			success: function(json) {
				console.log('i am moving the card again')
				App.moveCard(json.card);	
				$(e.currentTarget).closest('.move').find('*').remove();			
			}
		});
	},
	render: function() {
		var target = App.$el.find(".detailcard_view:visible").find('.move');
		target.find('*').remove();
		this.$el.html(this.template());
		target.html(this.$el).show();
	},
	initialize: function() {
		this.render();
	}
});
