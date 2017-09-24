var HomeView = Backbone.View.extend({
	tagName: 'ul',
	template: App.templates.home,
	events: {
		'click .view_board a': "viewBoard",
		"click #search": "search"
	},
	search: function(e) {
		console.log("working wow!");
	},
	viewBoard: function(e) {
		e.preventDefault();
		App.trigger("show_board");
		router.navigate("/lists");
	},
	render: function() {
		App.$el.find(".page_indicator").html("<h2><i class=" + 'fa fa-user-o' + "></i> Personal Boards</h2>");
		App.$el.removeClass('board');
		$('body').removeClass('board');
		App.$el.find('.main_content').addClass('boards');
		this.$el.html(this.template());
		App.$el.find('.main_content').html(this.$el);
	},
	initialize: function() {
		this.render();
	}
});


