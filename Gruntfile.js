module.exports = function(grunt) {
	grunt.initConfig({
		bower_concat: {
			all: {
				dest: "public/javascripts/vendor/all.js",
				dependencies: {
					"underscore": 'jquery',
					"backbone": "underscore"
				},
			}
		},
		uglify: {
			my_target: {
				files: {
					"public/javascripts/vendor/all.js" : ["public/javascripts/vendor/all.js"]
				}
			}
		},
		// handlebars/**/* handlebars directory and all sub directories
		handlebars: {
			all: {
				files: {
					"public/javascripts/handlebars_templates.js": ["handlebars/**/*.hbs"]
				},
				options: {
					processContent: removeWhitespace,
					processName: extractFileName
				}
			}
		}
	});

	["grunt-bower-concat", 
	"grunt-contrib-uglify", 
	"grunt-contrib-handlebars"
	].forEach(function(task) {
		grunt.loadNpmTasks(task);
	});

	grunt.registerTask("default", ["bower_concat", "uglify"]);
};

// remove all whitespace in the file, and remove the return and carriage
// return characters in the file(mg) globally across multiple lines

function removeWhitespace(template) {
	return template.replace(/ {2,}/mg, "").replace(/\r|\n/mg, "");
}
// "handlebars/albums.hbs" = albums.hbs
function extractFileName(file) {
	return file.match(/\/(.+)\.hbs$/).pop();
}









