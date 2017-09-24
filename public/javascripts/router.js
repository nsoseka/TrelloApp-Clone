var router = new (Backbone.Router.extend({
	routes: {
		"lists": App.showBoard.bind(App),
		"cards/:card": App.showCard.bind(App),
	},
	index: function() { App.init(); },
	initialize: function() {
		this.route(/^\/?$/, "index", this.index);
	},
}))();

Backbone.history.start({
	pushState: true,
});

$(document).on('click', "a[href^='/']", function(e) {
	e.preventDefault();
	router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true });
});

// manage the logic to close the search_results menu
$(document).on('click', ":not(header input)", function(e) {
	App.$el.find("header input").get(0).value = '';
	if ($(e.currentTarget).closest("#search_results").length === 0) {
		App.$el.find("#search_results").hide();
	} 
})

