var path = require('path'),
		Labels = require(path.resolve(path.dirname(__dirname), "modules/labels"));

module.exports = function(router) {
	router.get("/created_labels/labels", function(req, res, next) {
		var labels = Labels.get();
		res.json({"labels": labels});
	}).post("/labels/create_label", function(req, res) {
		var label = Labels.createLabel(req.body);
		res.json({"label": label});
	}).put("/labels/edit_label", function(req, res) {
		var label = Labels.editLabel(req.body);
		res.json({"label": label});
	});
}
