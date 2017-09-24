function setUpDragDrop() {
	var drake = dragula({
	});
	var cards = document.querySelectorAll('.list_container');
	for (var i = 0; i < cards.length; i++) {
		drake.containers.push(cards[i])
	};

	var drake2 = dragula({
		invalid: function(el, handle) {
			if (handle.tagName === "A") { return true; }
			return false;
		},
		moves: function(el, source, target, sibling) {
			if (el && el.getAttribute("id") !== "new_list") { return true; }
			return false;
		},
		accepts: function(el, target, source, sibling) {
			if (sibling === null) { return false ; };
			return true;
		}
	});
	var lists = document.querySelectorAll(".main_content");
	for (var i = 0; i < lists.length; i++) {
		drake2.containers.push(lists[i]);
	}

	drake.on("drag", function(el) {
		$(el).addClass('tilt');
	})
	.on("dragend", function(el) {
		$(el).removeClass('tilt');
	}).
	on("drop", function(el, target, source, sibling) {
		var source_list = $(source).data('listid');
		var target_list = $(target).data('listid');
		var card_moved = $(el).data('');
		var set = {};
		set[target_list] = repositionCards(target);
		if (source !== target) { 
			set[source_list] = repositionCards(source); 
		}

		App.reOrderCards(set);
	});

	drake2.on("drag", function(el) {
		$(el).addClass('tilt');
	})
	.on("dragend", function(el) {
		$(el).removeClass('tilt');
	}).
	on("drop", function(el, target, source, sibling) {
		var order = repositioner(target, '.list_view', '.list', 'position', 'id');

		App.reOrderLists(order[0]);
	});
}

function repositioner(target, container, item, post, idx) {
	var items = $(target).find(container);
	var order = [];
	var obj = {};
	for (var i = 0; i < items.length; i++) {
		var chip = i + 1;
		var l = $(items[i]).find(item);
		var id = l.data(idx) + '';
		obj[id] = chip;
		l.get(0).dataset[post] = chip;

		order.push(obj);
	}

	return order;
}

function repositionCards(target)  {
	var cards = $(target).find('.card:not(".empty")');
	var obj = {};
	var set = [];
	for (var i = 0; i < cards.length; i++) {
		var id = $(cards[i]).data('card');
		var position = $(cards[i]).get(0).dataset.cposition = i + 1
		obj[id] = position;
		set.push(obj);
	}

	return set[0];
}