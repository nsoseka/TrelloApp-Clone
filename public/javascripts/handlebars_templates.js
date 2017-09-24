this["JST"] = this["JST"] || {};

this["JST"]["board_details"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span class=\"board_name\">Your only Board</span> <a href=\"#\"><i class=\"fa fa-star-o\"></i></a> <a href=\"#\"><i class=\"fa fa-briefcase\"></i><span class=\"access\">Private</span></a>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "				<i class=\"fa fa-eye\"></i>			";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<i class=\"fa\"></i>			";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<li class=\""
    + alias4(((helper = (helper = helpers.label_color || (depth0 != null ? depth0.label_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label_color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.label_name || (depth0 != null ? depth0.label_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label_name","hash":{},"data":data}) : helper)))
    + "</li>				";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div>				<p>"
    + alias4(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</p>				<span>"
    + alias4(((helper = (helper = helpers.post_date || (depth0 != null ? depth0.post_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_date","hash":{},"data":data}) : helper)))
    + "</span>			</div>			";
},"9":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"11":function(container,depth0,helpers,partials,data) {
    return " unchecked ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card_view\">	<i class=\"left fa fa-credit-card\"></i><h2 class=\"left\">"
    + alias4(((helper = (helper = helpers.card_name || (depth0 != null ? depth0.card_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_name","hash":{},"data":data}) : helper)))
    + "</h2><i class=\"close right fa fa-times\"></i>	<textarea class=\"edit_title\">"
    + alias4(((helper = (helper = helpers.card_name || (depth0 != null ? depth0.card_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_name","hash":{},"data":data}) : helper)))
    + "</textarea>	<div class=\"left details\">		<span>In list <span class=\"underline\">"
    + alias4((helpers.format_list || (depth0 && depth0.format_list) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"format_list","hash":{},"data":data}))
    + "</span></span>		<span class=\"sub_status\">			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "		</span>		<h3>Labels</h3>		<div class=\"labels\">			<ul>				"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</ul>			<div class=\"add_label\"><i class=\"fa fa-plus\"></i></div>		</div>		<div class=\"date\">			<h3>Due Date</h3>			<span class=\"grey\">				<i class=\"fa fa-check\"></i>				<span class=\"underline\">"
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</span>			</span>		</div>		<div class=\"description\">			<h3>Description <a class=\"edit_description\" href=\"#\">Edit</a></h3>			<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>			<form action=\"#\" method=\"post\">				<textarea class=\"create_comment autoExpand\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>				<input type=\"submit\" value=\"Save\" class=\"green\">				<a href=\"#\" class=\"close\"><i class=\"fa fa-times\"></i></a>				<a href=\"#\" class=\"f right grey\">formatting help</a>			</form>		</div>		<div class=\"comment\">			<i class=\"fa fa-comment-o\"></i><h3>Add a comment</h3>			<form action=\"#\" method=\"post\">				<textarea class=\"autoExpand\" placeholder=\"Write a comment...\"></textarea>				<input type=\"submit\" value=\"Save\" class=\"green\">			</form>		</div>		<div class=\"activity\">			<i class=\"fa fa-align-center\"></i><h3>Activity</h3>			<div class=\"comments_posted\">			"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>																										</div>	</div>	<div class=\"right actions\">		<h3>Add</h3>		<ul>			<li><i class=\"fa fa-eraser\"></i> 				<span class=\"edit_labels\">labels</span>				<div class=\"scrollbar labels_list\">					<h4>Labels <i class=\"right fa fa-times\"></i></h4>					<input type=\"text\" name=\"search_labels\" placeholder=\"Search labels...\">					<ul>						<li>							<span class=\"red\"><i class=\"right fa fa-check\"></i></span>							<i class=\"fa fa-pencil\"></i>						</li>						<li>							<span class=\"indigo\"><i class=\"right fa fa-check\"></i></span>							<i class=\"fa fa-pencil\"></i>						</li>						<li>							<span class=\"violet\"></span>							<i class=\"fa fa-pencil\"></i>						</li>						<li>							<span class=\"blue\"><i class=\"right fa fa-check\"></i></span>							<i class=\"fa fa-pencil\"></i>						</li>						<li>							<span class=\"yellow\"><i class=\"right fa fa-check\"></i></span>							<i class=\"fa fa-pencil\"></i>						</li>						<li>							<span class=\"black\"></span>							<i class=\"fa fa-pencil\"></i>						</li>						<li>							<h3><a href=\"#\" class=\"create_new_label\">Creat label</a></h3>						</li>					</ul>				</div>				<div class=\"create_label\">					<h4><i class=\"left fa fa-long-arrow-left\"></i> Create label<i class=\"right fa fa-times\"></i></h4>					<h3>Name</h3>					<input type=\"text\" name=\"label_name\">					<h3>Select a color</h3>					<ul>						<li class=\"red\"><i class=\"fa fa-check\"></i></li>						<li class=\"black\"></li>						<li class=\"indigo\"></li>						<li class=\"violet\"></li>						<li class=\"greenn\"></li>						<li class=\"blue\"></li>						<li class=\"brown\"></li>						<li class=\"yellow\"></li>						<li class=\"purple\"></li>						<li class=\"no_color\"></li>						<h5><span>No color</span>This color won't show up on the front of the cards</span></h5>					</ul>					<button class=\"green\">Create</button>				</div>			</li>			<li><i class=\"fa fa-clock-o\"></i> <span class=\"edit_date\">Due Date</span>				<div class=\"date_picker\">				</div>			</li>		</ul>		<h3>Actions</h3>		<ul>			<li>				<i class=\"fa fa-arrow-right\"></i>				<span class=\"move_card\">Move</span>				<div class=\"move\">					<h4>Move card<i class=\"right fa fa-times\"></i></h4>					<div class=\"select\">						<h5>List</h5>						<select>							<option value=\"my_list\">My list</option>							<option value=\"my_second_list\">My second list</option>						</select>					</div>					<div class=\"select\">						<h5>Position</h5>						<select>							<option value=\"3\">3</option>							<option value=\"5\">5(current)</option>						</select>					</div>					<button class=\"green\">Move</button>				</div>			</li>			<li><i class=\"fa fa-credit-card\"></i>				<span class=\"copy_card\">Copy</span>				<div class=\"copy\">					<form action=\"#\" method=\"post\">						<h4>Copy card<i class=\"right fa fa-times\"></i></h4>						<h5>Title</h5>						<textarea class='autoExpand' rows='3' data-min-rows='3'>Card Name</textarea>						<h5>Keep..</h5>						<dl>							<dt><input type=\"checkbox\" name=\"cards_labels\" checked> Labels(4)</dt>							<dd></dd>							<dt><input type=\"checkbox\" name=\"cards_comments\" checked> Comments(9)</dt>							<dd></dd>						</dl>						<div class=\"select\">							<h5>List</h5>							<select>								<option value=\"my_list\">My list</option>								<option value=\"my_second_list\">My second list</option>							</select>						</div>						<div class=\"select\">							<h5>Position</h5>							<select>								<option value=\"3\">3</option>								<option value=\"5\">5(current)</option>								<option value=\"8\">8</option>								<option value=\"9\">9</option>								<option value=\"10\">10</option>								<option value=\"11\">11</option>							</select>						</div>						<button class=\"green\" type=\"submit\">Create card</button>					</form>									</div>			</li>			<li class=\"sub "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\">				<i class=\"fa fa-eye\"></i>Subscribe<i class=\"green fa fa-check\"></i></li>			<li class=\"delete_card\"><i class=\"fa fa-folder\"></i>Archive</li>		</ul>	</div>	<div class=\"clear\"></div>";
},"useData":true});

this["JST"]["choose_label"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li>		<span class=\""
    + alias4(((helper = (helper = helpers.label_color || (depth0 != null ? depth0.label_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label_color","hash":{},"data":data}) : helper)))
    + "\" data-label=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.label_name || (depth0 != null ? depth0.label_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label_name","hash":{},"data":data}) : helper)))
    + "			<i class=\"right fa "
    + alias4((helpers.has_label || (depth0 && depth0.has_label) || alias2).call(alias1,(depths[1] != null ? depths[1].card_id : depths[1]),(depth0 != null ? depth0.label_color : depth0),{"name":"has_label","hash":{},"data":data}))
    + "\"></i>		</span>		<i class=\"fa fa-pencil\"></i>	</li>	";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h4>Labels <i class=\"close right fa fa-times\"></i></h4><input type=\"text\" name=\"search_labels\" placeholder=\"Search labels...\"><ul>	"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<li>		<h3><a href=\"#\" class=\"create_new_label\">Creat label</a></h3>	</li></ul>";
},"useData":true,"useDepths":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>	<p>"
    + alias4(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</p>	<span>"
    + alias4(((helper = (helper = helpers.post_date || (depth0 != null ? depth0.post_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_date","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"useData":true});

this["JST"]["copy"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form action=\"#\" method=\"post\">	<h4>Copy card<i class=\"right fa fa-times\"></i></h4>	<h5>Title</h5>	<textarea name=\"title\" class='autoExpand' rows='3' data-min-rows='3'>"
    + alias4(((helper = (helper = helpers.card_name || (depth0 != null ? depth0.card_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_name","hash":{},"data":data}) : helper)))
    + "</textarea>	<h5>Keep..</h5>	<dl>		<dt><input type=\"checkbox\" name=\"labels\" checked> Labels("
    + alias4((helpers.number || (depth0 && depth0.number) || alias2).call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"number","hash":{},"data":data}))
    + ")</dt>		<dd></dd>		<dt><input type=\"checkbox\" name=\"comments\" checked> Comments("
    + alias4((helpers.number || (depth0 && depth0.number) || alias2).call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"number","hash":{},"data":data}))
    + ")</dt>		<dd></dd>	</dl>	<h5>Copy to...</h5>	<div class=\"select\">		<h5>List</h5>		<select name=\"list_id\">			"
    + ((stack1 = ((helper = (helper = helpers.lists_options || (depth0 != null ? depth0.lists_options : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lists_options","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "		</select>	</div>	<div class=\"select\">		<h5>Position</h5>		<select name=\"position\">			"
    + ((stack1 = ((helper = (helper = helpers.positions || (depth0 != null ? depth0.positions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"positions","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "		</select>	</div>	<button class=\"green copybt\" type=\"submit\">Create card</button>	</form>					";
},"useData":true});

this["JST"]["date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form autocomplete=\"off\" class=\"editdate_form\">	<h4>Change Due Date <i class=\"close right fa fa-times\"></i></h4>	<div class=\"left\">		<h3>Date</h3>		<div id=\"sandbox-container\">			<input type=\"text\" class=\"form-control\" name=\"date\">		</div>	</div>	<div class=\"right\">		<h3>Time</h3>		<input type=\"time\" name=\"time\">	</div>				<input type=\"submit\" class=\"left green\" value=\"Save\">	<button class=\"right reddish remove\">Remove</button></form>";
},"useData":true});

this["JST"]["edit_label"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h4><i class=\"left fa fa-long-arrow-left\"></i> Create label<i class=\"close right fa fa-times\"></i></h4><h3>Name</h3><input type=\"text\" name=\"label_name\"><h3>Select a color</h3><ul class=\"create_label\">	<li class=\"red\"><i class=\"fa fa-check\"></i></li>	<li class=\"black\"><i class=\"fa\"></i></li>	<li class=\"indigo\"><i class=\"fa\"></i></li>	<li class=\"violet\"><i class=\"fa\"></i></li>	<li class=\"greenn\"><i class=\"fa\"></i></li>	<li class=\"blue\"><i class=\"fa\"></i></li>	<li class=\"brown\"><i class=\"fa\"></i></li>	<li class=\"yellow\"><i class=\"fa\"></i></li>	<li class=\"purple\"><i class=\"fa\"></i></li>	<li class=\"pink\"><i class=\"fa\"></i></li>	<li class=\"no_color\"><i class=\"fa\"></i></li>	<h5><span>No color</span>This color won't show up on the front of the cards</span></h5></ul><button class=\"green\">Create</button>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"left\">	<a href=\"#\"><i class=\"fa fa-trello\"> Boards</i>	</a></h2><div id=\"search\" class=\"left\">	<input type=\"text\" name=\"search_query\">	<i class=\"r fa fa-search\"></i>	<i class=\"a fa fa-external-link\"></i>	<i class=\"a fa fa-times\"></i></div><h1>	<a href=\"/\">		<img src=\"/images/trello-logo-white.png\">	</a></h1><div id=\"info\" class=\"right\">	<a href=\"#\">		<i class=\"fa fa-plus\"></i>	</a>	<a href=\"#\">		<i class=\"fa fa-info-circle\"></i>	</a>	<a href=\"#\">		<i class=\"fa fa-bell-o\"></i>	</a></div>";
},"useData":true});

this["JST"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li class=\"view_board\">	<a href=\"#\">		Your only Board		<i class=\"fa fa-star-o\" title=\"Click to star this board, it will show up at the top of your boards lists\"></i>	</a></li>";
},"useData":true});

this["JST"]["list_adder"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span class=\"add_list\">Add a list...</span><form autocomplete=\"off\">	<input type=\"text\" name=\"list_name\" placeholder=\"Add a list...\" required>	<input type=\"submit\" value=\"Save\" class=\"green\">	<a href=\"#\" class=\"close\"><i class=\"fa fa-times\"></i></a>			</form>";
},"useData":true});

this["JST"]["lists"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"card\" data-card="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " data-cposition="
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + ">				<a class=\"card_shower\" href=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-pencil\"></i></a>					<div class=\"labels\">						"
    + ((stack1 = (helpers.filterLabels || (depth0 && depth0.filterLabels) || alias2).call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"filterLabels","hash":{},"data":data})) != null ? stack1 : "")
    + "					</div>									<h3>					<span>"
    + alias4(((helper = (helper = helpers.card_name || (depth0 != null ? depth0.card_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_name","hash":{},"data":data}) : helper)))
    + "</span>					<div class=\"overlay\"></div>					<div class=\"edit_card_name\">						<form>							<textarea>"
    + alias4(((helper = (helper = helpers.card_name || (depth0 != null ? depth0.card_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_name","hash":{},"data":data}) : helper)))
    + "</textarea>							<input type=\"submit\" value=\"Save\" class=\"green\">						</form>					</div>				</h3>				<div class=\"properties\">					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>				<div class=\"detailcard_view\">				</div>									</div>		";
},"2":function(container,depth0,helpers,partials,data) {
    return "						<i class=\"fa fa-eye\"></i>					";
},"4":function(container,depth0,helpers,partials,data) {
    return "						<i class=\"fa fa-clock-o\"> "
    + container.escapeExpression((helpers.format_date || (depth0 && depth0.format_date) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.due_date : depth0),{"name":"format_date","hash":{},"data":data}))
    + "</i>					";
},"6":function(container,depth0,helpers,partials,data) {
    return "						<i class=\"fa fa-bars\"></i>					";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<i class=\"fa fa-comment-o\"> "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + "</i>					";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list scrollbar\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " data-position="
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "><div class=\"list_header\">	<h2 class=\"left\">"
    + alias4(((helper = (helper = helpers.list_name || (depth0 != null ? depth0.list_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"list_name","hash":{},"data":data}) : helper)))
    + "</h2>		<textarea class=\"autoExpand\" dir=\"auto\" maxlength=\"512\">"
    + alias4(((helper = (helper = helpers.list_name || (depth0 != null ? depth0.list_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"list_name","hash":{},"data":data}) : helper)))
    + "</textarea>					<a href=\"#\" class=\"right\"><i class=\"fafa-ellipsis-h\"></i></a></div><div class=\"list_container scrollbar\" data-listId="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">	<div class=\"card empty\"></div>	"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"empty\"></div></div>	<div class=\"new_card\">	<a class=\"nc\" href=\"#\"><span>Add a card...</span></a>	<form action=\"#\" method=\"post\" autocomplete=\"off\">		<textarea class=\"autoExpand\"></textarea>		<input type=\"submit\" value=\"Add\" class=\"green\">		<a href=\"#\" class=\"close\"><i class=\"fa fa-times\"></i></a>		<a href=\"#\"><i class=\"right fa fa-ellipsis-h\"></i></a>	</form>	</div></div>";
},"useData":true});

this["JST"]["move"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<form><h4>Move card<i class=\"right fa fa-times\"></i></h4><div class=\"select\">	<h5>List</h5>	<select name=\"list_id\">		"
    + ((stack1 = ((helper = (helper = helpers.lists_options || (depth0 != null ? depth0.lists_options : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lists_options","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "	</select></div><div class=\"select\">	<h5>Position</h5>	<select name=\"position\">		"
    + ((stack1 = ((helper = (helper = helpers.positions || (depth0 != null ? depth0.positions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"positions","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "	</select></div><button type=\"submit\" class=\"green movebt\">Move</button></form>";
},"useData":true});

this["JST"]["notifications"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>	<a href=\"cards/"
    + alias4(((helper = (helper = helpers.card_id || (depth0 != null ? depth0.card_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_id","hash":{},"data":data}) : helper)))
    + "\">		<div>"
    + alias4(((helper = (helper = helpers.notification || (depth0 != null ? depth0.notification : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notification","hash":{},"data":data}) : helper)))
    + "</div>	</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Notifications(click to view the card) <i class=\"fa fa-times right\"></i></h2><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.notifications : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["search_indicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<span>"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data}) : helper)))
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<img src=\"images/loading.gif\"/>	<span> Seaching<i class=\"fa fa-ellipsis-h\"></i></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["search"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>	<td>		<a href=\"cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">			<div class=\"card\">				<div class=\"labels\">					"
    + ((stack1 = (helpers.filterLabels || (depth0 && depth0.filterLabels) || alias2).call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"filterLabels","hash":{},"data":data})) != null ? stack1 : "")
    + "				</div>				<h3>"
    + alias4(((helper = (helper = helpers.card_name || (depth0 != null ? depth0.card_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_name","hash":{},"data":data}) : helper)))
    + "</h3>				<div class=\"properties\">					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>			</div>		</a>	</td>	<td>		<h3><a href=\"cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.card_name || (depth0 != null ? depth0.card_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_name","hash":{},"data":data}) : helper)))
    + "</a></h3>		<p>In <span>"
    + alias4((helpers.format_list || (depth0 && depth0.format_list) || alias2).call(alias1,(depth0 != null ? depth0.list_id : depth0),{"name":"format_list","hash":{},"data":data}))
    + "</span></p>	</td></tr>";
},"2":function(container,depth0,helpers,partials,data) {
    return "					<i class=\"fa fa-eye\"></i>					";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<i class=\"fa fa-clock-o\"> "
    + container.escapeExpression(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</i>					";
},"6":function(container,depth0,helpers,partials,data) {
    return "					<i class=\"fa fa-bars\"></i>					";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<i class=\"fa fa-comment-o\"> "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + "</i>					";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});