var ListAdder = Backbone.View.extend({
	template: App.templates.list_adder,
	attributes: {
		'id': "new_list",
	},
	events: {
		"submit form": "createList",
		"click span": "newList",
		"click .close": "closeAdder",
	},
	newList: function(e) {
		$(e.currentTarget).hide().siblings("form").
		slideDown(100).find("input[type='text']").focus();
	},
	createList: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var list = $(e.currentTarget).serializeArray();
		var obj = {};
		for (var i = 0; i < list.length; i++) {
		  obj[list[i]['name']] = list[i]['value'];
		}
		
		$.ajax({
			url: "lists/create_list",
			method: "post",
			data: obj,
			success: function(json) {
				App.addList(json.list);
			}
		});

		App.$el.find('.main_content').scrollLeft(4000);
	},
	closeAdder: function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(e.currentTarget).closest("form").hide().siblings('span').show();
	},
	render: function() {
		this.$el.html(this.template());
		App.$el.find('.main_content').append(this.$el);
	},
	initialize: function() {
		this.render();
	}
});

