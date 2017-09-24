var Labels = Backbone.Collection.extend({
	model: Label,
	parse: function(response) {
		return response.labels;
	},
	url: "/created_labels/labels",
});
