var path = require('path'),
		Lists = require(path.resolve(path.dirname(__dirname), "modules/lists"));

/* GET users listing. */
module.exports = function(router) {
	router.get('/your_only_board/lists', function(req, res, next) {
	  res.json({"lists": Lists.getCards()});
	}).
	put('/lists/re_order', function(req, res, next) {

		Lists.reOrderLists(req.body);
		res.json({'success': 're_order'})
	}).put('/lists/edit_listname', function(req, res, next) {
		var new_list = Lists.editListName(req.body);
		res.json({'list': new_list});
	}).
	post('/lists/create_list', function(req, res, next) {
		var list = Lists.createList(req.body);
		res.json({"list": list})
	});
}

