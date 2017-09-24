var CopyCardView = Backbone.View.extend({
	template: App.templates.copy,
	events: {
		"click button.copybt": "copy",
		"click .fa-times": "close",
	},
	close: function(e) {
		e.preventDefault();
		$(e.currentTarget).closest('.copy').find('*').remove();
	},
	copy: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var data = {};
		var info = $(e.currentTarget).closest('form').serializeArray();
		data.id = $(e.currentTarget).closest('.card').data('card');
		info.forEach(function(val) {
			data[val['name']] = val['value'];
		});

		$.ajax({
			url: "/cards/copy_card",
			method: 'post',
			data: data,
			success: function(json) {
				App.copyCard(json.card);	
				$(e.currentTarget).closest('.copy').find('*').remove();		
			}
		});
	},
	render: function() {
		var target = App.$el.find(".detailcard_view:visible").find('.copy');
		target.find('*').remove();
		this.$el.html(this.template(this.model.toJSON()));
		target.html(this.$el).show();
	},
	initialize: function() {
		this.render();
	}
});
