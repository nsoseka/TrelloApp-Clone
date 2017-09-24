Handlebars.registerHelper('filterLabels', function(labels) {
	var colors = ["greenn", "blue", "red", "violet", "indigo", "yellow", "purple", "pink", "brown", "black"];
	var out = "<ul>";

	for (var i = 0; i < labels.length; i++) {
		if(colors.includes(labels[i].label_color)) {
			out = out + "<li class='" + labels[i].label_color + "'>" + "</li>";
		}
	}

	return out + "</ul>";
});

Handlebars.registerHelper("format_date", function(date) {
	return date.split('at')[0];
});

Handlebars.registerHelper("format_list", function(id) {
	var name = App.lists.get(+id).toJSON().list_name;
	return name;
});

Handlebars.registerHelper("lists_options", function() {
	var out = "";
	var lists = App.lists.toJSON();

	for (var i = lists.length - 1; i >= 0; i--) {
		out = out + "<option value='" + lists[i].id + "'>" + lists[i].list_name + "</option>";
	}

	return out;
});

Handlebars.registerHelper('positions', function() {
  var lists = App.lists.toJSON();
  var out = "";
  var number = 1;
  lists = lists.forEach(function(a) {
  	number = a.cards.length > number ? a.cards.length : number;
  });
  
  for (var i = 1; i <= number; i++) {
  	out = out + "<option value='" + i + "'>" + i + "</option>";
  }
  return out;
});

Handlebars.registerHelper('number', function(items) {
	return items.length;
});

Handlebars.registerHelper('has_label', function(card_id, label) {
	var labels = App.cards.get(+card_id).get('labels').map(function(labs) {
		return labs.label_color;
	});

	if (labels.includes(label)) {
		return "fa-check";
	} else {
		return "";
	}
});

Handlebars.registerHelper("nci_lcolor", function(label_id) {
	var label = App.labels.get(+label_id);
	return label.label_color;
});

