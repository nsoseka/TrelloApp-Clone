var Lists = Backbone.Collection.extend({
	model: List,
	parse: function(response) {
		return response.lists;
	},
	url: "/your_only_board/lists",
});
