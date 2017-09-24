var SearchResultsView = Backbone.View.extend({
	tagName: 'tbody',
	template: App.templates.search,
	events: {
		"click a": "showCard",
	},
	showCard: function(e) {
		var card = +e.currentTarget.getAttribute("href").split(/\//)[1].replace(/\//, "");
		e.preventDefault();
		App.$el.find("header input").get(0).value = '';
		App.$el.find("#search_results").hide();
		router.navigate(e.currentTarget.getAttribute("href"));
		App.showCard(card);
	},
	render: function() {
		this.$el.html(this.template(this.collection.toJSON()[0]));
		App.$el.find("#search_results table tbody").remove()
		App.$el.find("#search_results table").html(this.$el);
	},
	initialize: function() {
		this.render();
	},
});

