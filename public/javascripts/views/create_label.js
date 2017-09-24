var CreateLabelView = Backbone.View.extend({
	template: App.templates.edit_label,
	attributes: {
		"class": "createlabel_container",
	},
	events: {
		"click .close": "close",
		"click li": "chooseColor",
		"click .fa-long-arrow-left": "chooseLabel",
		"click button.green": "createLabel",
	},
	createLabel: function(e) {
		var self = this;
		var data = {};
		data.label_name = $(e.currentTarget).siblings('input').get(0).value.trim();
		data.label_color = $(e.currentTarget).siblings('ul').
												find('.fa-check').parent('li').get(0).getAttribute('class');

		$.ajax({
			url: "/labels/create_label",
			method: 'post',
			data: data,
			success: function(json) {
				App.addLabel(json.label);
				self.chooseLabel();
			}
		});
	},
	chooseLabel: function(e) {
		App.chooseLabel();
	},
	chooseColor: function(e) {
		$(e.currentTarget).closest('ul').find('i').removeClass('fa-check');
		$(e.currentTarget).find('i').addClass('fa-check');
	},
	close: function(e) {
		App.$el.find(".detailcard_view:visible").find('.createlabel_container').remove();
		App.$el.find(".detailcard_view:visible").find('.labels_list').hide();
	},
	render: function() {
		var target = App.$el.find(".detailcard_view:visible").find('.labels_list');
		target.find('*').remove();
		this.$el.html(this.template());
		target.html(this.$el).show();
	},
	initialize: function() {
		this.render();
	}
});
