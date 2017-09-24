var NotificationsView = Backbone.View.extend({
	template: App.templates.notifications,
	events: {
		"click a": "showCard",
		"click h2 i": 'close',
	},
	close: function(e) {
		App.$el.find("#notifications").find("*").remove();
		App.$el.find("#notifications").hide();
	},
	showCard: function(e) {
		e.preventDefault();
		var href = "/" + $(e.currentTarget).attr("href");
		router.navigate(href, {trigger: true });
		this.close();
	},
	render: function() {
		this.$el.html(this.template({"notifications": this.collection.toJSON()}));
		App.$el.find("#notifications").html(this.$el);
		App.$el.find("#notifications").show();
	},
	initialize: function() {
		this.render();
	}
});
