var LabelsView = Backbone.View.extend({
	template: App.templates.choose_label,
	attributes: {
		'class': "labels_container scrollbar",
	},
	events: {
		"click li": "chooseLabel",
		"click .close": "close",
		"keyup input[name='search_labels']": "search",
		"click h3 a": "createLabel",
	},
	createLabel: function(e) {
		e.preventDefault();
		e.stopPropagation();
		App.createLabel();
	},
	search: function(e) {
		var query = $(e.currentTarget).get(0).value.trim();
		var lis = $(e.currentTarget).siblings('ul').find('li');

		lis.each(function(idx, li) {
			var span = $(li).find('span').get(0);
			if ((span.textContent + span.getAttribute('class')).indexOf(query) === -1) {
				$(li).hide();
			} else {
				$(li).show();
			}
		});
	},
	close: function(e) {
		App.$el.find(".detailcard_view:visible").find('.labels_container').remove();
		App.$el.find(".detailcard_view:visible").find('.labels_list').hide();
	},
	chooseLabel: function(e) {
		var data = {};
		var li = $(e.currentTarget),
				checker = [],
				label_color = li.find('span').get(0).getAttribute('class'),
				label_name = li.find('span').get(0).textContent.trim();
				label_id = li.find('span').data('label'),
				card_id = li.closest('.card').data('card');
		data.id = card_id; data.label_name = label_name; 
		data.label_id = label_id; data.label_color = label_color;

		$.ajax({
			url: "/cards/edit_labels",
			method: 'put',
			data: data,
			success: function(json) {
				App.cardEditor(json.card);
			}
		});

		li.find('i').toggleClass('fa-check');
		var new_li = '<li class=' + label_color + '>' + label_name + '</li>';
		var lis =  App.$el.find(".detailcard_view:visible").
		find('.labels ul li.' + label_color);
		lis.each(function(idx, li) {
			if (li.textContent.trim() === label_name) { checker.push(li)};
		});
		if (checker.length === 0) {
			App.$el.find(".detailcard_view:visible .labels ul").prepend(new_li);
		} else {
			$(checker[0]).remove();
		}
	},
	setLi: function(label_color, label_name) {
		var checker = [];
		var new_li = '<li class=' + label_color + '>' + label_name + '</li>';
		var lis =  App.$el.find(".detailcard_view:visible").
		find('.labels ul li.' + label_color);
		lis.each(function(idx, li) {
			if (li.textContent.trim() === label_name) { checker.push(li)};
		});
		if (checker.length === 0) {
			App.$el.find(".detailcard_view:visible .labels ul").prepend(new_li);
		} else {
			$(checker[0]).remove();
		}
	},
	render: function() {
		var card_id = App.$el.find(".detailcard_view:visible").closest('.card').data('card');
		var target = App.$el.find(".detailcard_view:visible").find('.labels_list');
		target.find('*').remove();
		this.$el.html(this.template({labels: this.collection.toJSON(), card_id: card_id}));
		target.html(this.$el).show();
	},
	initialize: function() {
		this.render();
	}
});
