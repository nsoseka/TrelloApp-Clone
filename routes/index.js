var path = require('path'),
		Cards = require(path.resolve(path.dirname(__dirname), "modules/cards"));

/* GET home page. */
module.exports = function(router) {
	router.get('/', function(req, res, next) {
	  res.render('index', { 
	  	title: 'Express' 
	  });
	}).get("/search/", function(req, res, next) {
		res.render("index", {});
	}).get("/search/:search_query", function(req, res, next) {
		var query = req.params.search_query.toLowerCase();
		res.json({"cards": Cards.getMatchingCards(query)});
	}).get("/:card", function(req, res, next) {
		var card_id = req.params.card;
		res.render("card", { "id": card_id });
	}).put("/cards/re_order", function(req, res, next) {
		Cards.moveCards(req.body);
		res.json({"success": "reorder"});
	}).put("/cards/edit_cardname", function(req, res, next) {
		var edited_card = Cards.editCardName(req.body);
		res.json({"card": edited_card});
	}).post("/cards/add_card", function(req, res, next) {
		var card = Cards.createCard(req.body);
		res.json({'card': card});
	}).get("/cards/:card", function(req, res, next) {
		console.log('card');
		var card = req.params.card;
		res.render("card", {"card": card});
	}).put("/cards/edit_description", function(req, res, next) {
		var card = Cards.editDescription(req.body);
		res.json({"card": card });
	}).post("/cards/post_comment", function(req, res, next) {
		var card = Cards.postComment(req.body);
		res.json({'card': card });
	}).put("/cards/edit_duedate", function(req, res, next) {
		var card = Cards.editDuedate(req.body);
		res.json({"card": card});
	}).put("/cards/move_card", function(req, res, next) {
		var card = Cards.moveCard(req.body);
		res.json({"card": card});
	}).post("/cards/copy_card", function(req, res, next) {
		var card = Cards.copyCard(req.body);
		res.json({"card": card});
	}).put("/cards/edit_subscription", function(req, res, next) {
		var card = Cards.editSubscription(req.body);
		res.json({"card": card});
	}).delete("/cards/delete_card", function(req, res, next) {
		var card = Cards.deleteCard(req.body);
		res.json({"card": card});
	}).put("/cards/edit_labels", function(req, res, next) {
		var card = Cards.editLabels(req.body);
		res.json({"card": card});
	});
}

