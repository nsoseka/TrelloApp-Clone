var HeaderView = Backbone.View.extend({
	template: App.templates.header,
	attributes: {
		"id": "head"
	},
	events: {
		"keyup #search input": "search",
		"click #search_results a .fa-bell-o": "showCard",
		"click a": "dontFollow",
		"click .fa-bell-o": "showNotifications"
	},
	showNotifications: function(e) {
		e.preventDefault();
		App.showNotifications();
	},
	showCard: function(e) {
		e.preventDefault();
	},
	search: function(e) {
		var query = e.currentTarget.value;
		e.preventDefault();

		App.$el.find("#search_results h6").html(App.templates.search_indicator({}));
		$.ajax({
			url: "search/" + query,
			method: 'get',
			success: function(json) {
				setTimeout(function() {
					var message = "No matches were found";
					if (json.cards && json.cards.length > 0) {
						message = json.cards.length + " matche(s) were found";
						App.$el.find("#search_results h6").html(App.templates.search_indicator({ message: message }));
					} else {
						App.$el.find("#search_results h6").html(App.templates.search_indicator({ message: message }));
					}

					App.showSearchResults(json);
				}, 400);				
			}
		});
		App.$el.find("#search_results").show();
	},
	dontFollow: function(e) {
		e.preventDefault();
	},
	render: function() {
		this.$el.html(this.template());
		App.$el.find("header").removeClass("board").html(this.$el);
	},
	initialize: function() {
		this.render();
	}
});

