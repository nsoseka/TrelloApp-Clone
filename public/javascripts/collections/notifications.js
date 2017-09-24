var Notifications = Backbone.Collection.extend({
	model: Notification,
	parse: function(response) {
		return response.notifications;
	},
	url: "/load/notifications",
});

